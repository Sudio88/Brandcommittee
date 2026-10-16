// The "claude" runner: a question typed in the room is handed to Claude Code (`claude -p`),
// which runs the /roast-room skill headless in the project folder (the vault when installed)
// on the user's own Claude plan. The skill writes the session files; the room plays them.
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT, SESSIONS_DIR } from "./env.mjs";

const CLAUDE = process.env.CLAUDE_BIN || "claude";

/** Is the Claude Code CLI installed and on PATH? */
export function claudeAvailable() {
  try { return spawnSync(CLAUDE, ["--version"], { timeout: 15000 }).status === 0; } catch { return false; }
}

// Tools the headless Chair may use without a prompt: read the vault, write the session files,
// spawn the seat agents, run the quote checker and the seats' read-only data scripts.
const ALLOWED = [
  "Read", "Grep", "Glob", "Write", "Edit", "Task", "Agent", "Skill", "TodoWrite",
  "Bash(python3:*)", "Bash(python:*)", "Bash(ls:*)", "Bash(mkdir:*)", "Bash(date:*)",
];

const state = { status: "idle", started: 0, ended: 0, error: "", log: "", question: "" };
let child = null;

export const runnerState = () => ({ ...state, log: state.log.slice(-2000) });

export function startClaudeCouncil(question, mode) {
  if (child) throw Object.assign(new Error("A council is already being convened. Wait for its verdict."), { code: 409 });
  const flag = mode === "quick" ? "--quick " : "";
  const prompt =
    `/roast-room ${flag}${question}\n\n` +
    "(Started from the Roast Room app, running headless: nobody can answer questions, so do not ask any. " +
    "Fill gaps from the vault and mark them (assumed). Run every step through verdict.json so the room can play it. " +
    "Skip the 'watch it live' line and any offer to start the room; it is already open.)";
  fs.mkdirSync(path.join(SESSIONS_DIR, ".runs"), { recursive: true });
  const logFile = path.join(SESSIONS_DIR, ".runs", `${new Date().toISOString().replace(/[:.]/g, "-")}.log`);
  const out = fs.createWriteStream(logFile);
  Object.assign(state, { status: "running", started: Date.now(), ended: 0, error: "", log: "", question });
  child = spawn(CLAUDE, ["-p", prompt, "--permission-mode", "acceptEdits", "--allowedTools", ALLOWED.join(",")], {
    cwd: REPO_ROOT, env: process.env, stdio: ["ignore", "pipe", "pipe"],
  });
  const onData = (d) => { out.write(d); state.log += d.toString(); if (state.log.length > 20000) state.log = state.log.slice(-10000); };
  child.stdout.on("data", onData);
  child.stderr.on("data", onData);
  child.on("error", (e) => { state.status = "failed"; state.error = `Could not start Claude Code: ${e.message}`; });
  child.on("close", (code) => {
    out.end();
    child = null;
    state.ended = Date.now();
    if (state.status === "running") {
      state.status = code === 0 ? "done" : "failed";
      if (code !== 0) state.error = `Claude Code stopped (exit ${code}). See ${path.relative(REPO_ROOT, logFile)}.`;
    }
  });
  return { logFile };
}
