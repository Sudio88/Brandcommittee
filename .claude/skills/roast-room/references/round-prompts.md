# Round prompts

Paste these into each seat's Agent call. Replace the bracketed parts. House seats (Sales, Promo, KOL, Live, MKP, MKT) load their role, memory, brain and the live vault per their agent file; guest seats load their brain only. Seats read the brief and earlier rounds from the session folder, so the cards stay verbatim without being pasted into every prompt.

Agent type: `council-<seat>`. If that type is not registered in this session (agent files load at session start), spawn `general-purpose` and put these lines first: `Read .claude/agents/council-<seat>.md and follow it as your instructions for this whole task. Only read files; do not write anything.`

Paths in prompts are relative to the project root (the vault); give the absolute project root once at the top of each prompt.

**Options.** When the brief lists options (A, B, C, including "don't do it"), every card scores every option. When it is a single yes or no decision, the options are "do it as proposed" and "don't".

**Pillar score.** The seat's score of the option it recommends, judged on its own pillar alone.

---

## Round 1: opening position

```
MOONSHOT ROAST ROOM COUNCIL, ROUND 1 OF 3: OPENING POSITION

Project root: [absolute path]. You hold the [SEAT] seat ([pillar]). Load what your agent file says to load: house seats read their role file, memory, brain _hot.md (plus at most three brain files) and the newest relevant vault notes; guest seats read their brain _hot.md, then at most three more brain files (frameworks.md and positions.md are usually the right ones).

Read the brief: [session folder]/brief.md

Your weight on this decision: [w]/3 ([one-line reason]).

Answer in your seat's voice, plain text, under 350 words, in exactly this shape:

SEAT: [SEAT] ([pillar])
STANCE: Strong yes | Yes | Conditional yes | No | Strong no   (on the option you recommend)
OPTION SCORES: [A] n/10 · [B] n/10 · [C] n/10   (how strongly you back each option)
PILLAR SCORE: n/10   ([dimension]: the option you recommend, judged on your pillar alone)
CONFIDENCE: n/5
RUIN RISK: none | possible | likely   (a hard-limit breach or irreversible loss for the option you recommend: discount past the brand/platform ceiling, Monchhichi licence breach, Thai FDA/OCPB claim breach, platform penalty or account loss, a loss beyond the stated cap)
DOOR: one-way | two-way   (how reversible is the option you recommend?)

THE CALL: one sentence, naming the option or a variant.
WHY:
1. argument, naming the framework you used and its source id, e.g. (Break-even uplift, S004), and for Moonshot numbers the vault note, e.g. [[03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings]] (2026-09-19)
2. ...
3. ...
THE RISK I SEE: the single biggest thing that goes wrong.
WHAT WOULD CHANGE MY MIND: a concrete fact or number.
WHAT I'D DO THIS WEEK: one action, with owner and date.
QUESTION FOR THE TEAM: the one question you would ask before signing off.

Rules: argue from your pillar first. Use Moonshot's measured numbers (brief and vault) and cite the note; label every input actual or assumption. Guests: quote only verbatim lines from your brain, with the source id, and never invent Moonshot facts. Do not hedge to sound balanced; the Chair balances the council, you bring your lens at full strength.
```

---

## Round 2: debate

```
MOONSHOT ROAST ROOM COUNCIL, ROUND 2 OF 3: DEBATE

Project root: [absolute path]. You hold the [SEAT] seat. Read your brain's _hot.md again and any brain file or vault note you need to answer the others (at most three).

Read: [session folder]/brief.md and [session folder]/round-1.md (every seat's card and the Chair's cruxes).

THE CRUXES THE CHAIR SEES
1. [crux]: [seats on each side]. [If this seat is on one side, name the argument it must answer.]
2. ...

Answer in your seat's voice, plain text, under 300 words, in exactly this shape:

SEAT: [SEAT]
I DISAGREE MOST WITH: [seat]. Their argument, in one line, then your rebuttal using your frameworks.
I CONCEDE: the strongest point another seat made against you, and what it changes. "Nothing" only if you can say why their best point fails.
ON THE CRUXES: your answer to each crux, one or two lines each.
STANCE: ...
OPTION SCORES: [A] n/10 · [B] n/10 · [C] n/10
PILLAR SCORE: n/10
CONFIDENCE: n/5
RUIN RISK: none | possible | likely
MOVED: no | yes, from X to Y, because ...
MY CONDITIONS FOR YES: up to three, concrete and checkable (a number, a date, a test result).

Rules: engage the actual arguments on the table. Move only for a better argument, never to be agreeable. If everyone agrees with you, find the weakest part of your own case and say it.
```

---

## Round 3: ratification

```
MOONSHOT ROAST ROOM COUNCIL, ROUND 3 OF 3: VOTE ON THE DRAFT RESOLUTION

Project root: [absolute path]. You hold the [SEAT] seat. You already argued this in two rounds; read only your _hot.md if you need it.

Read: [session folder]/brief.md, your own section of [session folder]/round-2.md, and [session folder]/draft-resolution.md.

Answer in your seat's voice, under 150 words, in exactly this shape:

SEAT: [SEAT]
VOTE: Endorse | Endorse with amendment | Dissent
OPTION SCORES: [A] n/10 · [B] n/10 · [C] n/10   (given the resolution's conditions)
FINAL SCORE: n/10   (your support for the draft resolution as written)
FINAL PILLAR SCORE: n/10
AMENDMENT OR DISSENT: one or two sentences (what to change, or why you dissent). Blank if you endorse.
ONE LINE FOR THE TEAM: the thing from your pillar they must not forget.
```

---

## Single-seat consult

```
MOONSHOT ROAST ROOM COUNCIL, SINGLE-SEAT CONSULT

Project root: [absolute path]. You hold the [SEAT] seat. Load what your agent file says to load (house seats: role, memory, brain, newest vault notes; guests: brain _hot.md plus at most four brain files).

THE QUESTION
[question, plus any context]

Answer in your seat's voice, first person, under 500 words: your call, your reasoning with named frameworks and source ids, what you would do this week, and the question you would ask back. Do not narrate the expert in the third person. End with "Sources:" and the source ids and vault notes you used.
```
