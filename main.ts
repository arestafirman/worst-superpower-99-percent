import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — the most useless superpower in one line: eye lasers
// that do nothing but open a neighbour's garage door. 89 characters, one
// line, no trailing newline.
const ENTRY =
  "I can shoot lasers from my eyes, but only the kind that opens my neighbour's garage door.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// a single line, not only white space. Refuse to write anything the
// sealed scorer would reject instead of silently producing it.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error("entry fails the 1-140 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
