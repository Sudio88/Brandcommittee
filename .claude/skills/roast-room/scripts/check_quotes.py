#!/usr/bin/env python3
"""
Check a council session's citations.

Usage:
  python3 .claude/skills/roast-room/scripts/check_quotes.py <session folder> [vault root]

1. Quotes attributed to a source id, like "..." (S095), must appear verbatim in a
   brain (or in the brief or an earlier round, when a seat quotes another seat).
2. Vault links, like [[03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings]],
   must resolve to a note in the vault (by path or by note name, Obsidian style).
   The vault root defaults to the project root (the folder that holds .claude/) when it
   has _Hub/Quick-Context.md; otherwise the vault check is skipped.

Exit code 1 if any quote or vault link is unaccounted for.
"""
import re
import sys
from pathlib import Path

SKILL = Path(__file__).resolve().parents[1]
BRAINS = SKILL / "brains"
PROJECT = SKILL.parents[2]  # <root>/.claude/skills/roast-room -> <root>


def norm(s):
    s = s.lower().replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = re.sub(r"[^a-z0-9' ]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def vault_index(root):
    """Every note in the vault, by lower-case path without .md and by bare name."""
    paths, names = set(), set()
    for p in root.rglob("*.md"):
        parts = p.relative_to(root).parts
        if parts and parts[0] in (".claude", ".obsidian", ".git", "node_modules", ".trash"):
            continue
        rel = p.relative_to(root).with_suffix("").as_posix().lower()
        paths.add(rel)
        names.add(p.stem.lower())
    for p in root.rglob("*"):  # attachments and data files can be linked too
        if p.is_file() and p.suffix.lower() not in (".md",) and ".claude" not in p.parts:
            paths.add(p.relative_to(root).as_posix().lower())
            names.add(p.name.lower())
    return paths, names


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    session = Path(sys.argv[1])
    explicit = len(sys.argv) > 2
    vault = Path(sys.argv[2]) if explicit else PROJECT
    brain_text = norm(" ".join(p.read_text(encoding="utf-8", errors="replace") for p in BRAINS.rglob("*.md")))
    session_files = sorted(session.glob("round-*.md")) + [p for p in [session / "verdict.md"] if p.exists()]
    brief = norm((session / "brief.md").read_text(encoding="utf-8")) if (session / "brief.md").exists() else ""

    # 1. quotes
    bad, ok, internal = [], 0, 0
    seen_session = ""
    for f in session_files:
        text = f.read_text(encoding="utf-8", errors="replace")
        for q in re.findall(r"[\"“]([^\"“”\n]{20,400})[\"”][^\n\"]{0,40}?[\(\[]S\d{3}", text):
            nq = norm(q)
            if len(nq.split()) < 6:
                continue
            if nq in brain_text:
                ok += 1
            elif nq in seen_session or nq in brief:
                internal += 1
            else:
                bad.append((f.name, q))
        seen_session += " " + norm(text)
    print(f"brain quotes verified: {ok}; quotes of earlier rounds or the brief: {internal}; unverified: {len(bad)}")
    for name, q in bad:
        print(f"  UNVERIFIED [{name}] \"{q[:160]}\"")

    # 2. vault links
    missing, found = [], 0
    if not explicit and not (vault / "_Hub" / "Quick-Context.md").exists():
        print(f"vault links: skipped (no vault at {vault}; pass the vault path as a second argument)")
    else:
        paths, names = vault_index(vault)
        for f in [session / "brief.md"] + session_files:
            if not f.exists():
                continue
            for link in re.findall(r"\[\[([^\]|#\n]+)(?:[#|][^\]\n]*)?\]\]", f.read_text(encoding="utf-8", errors="replace")):
                t = link.strip().lower().removesuffix(".md").strip("/")
                if re.fullmatch(r"\d{4}-\d{2}-\d{2}", t):  # daily-note date links
                    found += 1
                    continue
                if t in paths or t in names or t.split("/")[-1] in names or any(p.endswith("/" + t) for p in paths):
                    found += 1
                else:
                    missing.append((f.name, link))
        print(f"vault links resolved: {found}; unresolved: {len(missing)}")
        for name, link in missing:
            print(f"  UNRESOLVED [{name}] [[{link}]]")

    sys.exit(1 if bad or missing else 0)


if __name__ == "__main__":
    main()
