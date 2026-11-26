// Famous Last Words: The Funniest Epitaph — make.fun entry
// Writes one funny tombstone epitaph (a single line of dying speech)
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: every tombstone promises rest in peace, so the dead man files a
// complaint about the dosage — he asked for five minutes of peace and quiet
// and got eternity. The small, specific request against the endless result
// is the twist, and it only works carved on the stone that granted it.
const LINE =
  "All I wanted was five minutes of peace and quiet. Eternity feels like an overreaction.";

// The gate allows 1 to 150 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 150 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-150.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
