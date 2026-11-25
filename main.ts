import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
// Composed from three beats: the hour, the six hours of faithful
// refrigeration, and the grudge. Dave went for dry cereal instead.
const HOUR = "It's 3am.";
const GRIEVANCE =
  "I've kept your leftovers cold for six hours and you came for dry cereal.";
const GRUDGE = "I remember everything, Dave.";

const MAX_CHARS = 140;

function composeLine(): string {
  return `${HOUR} ${GRIEVANCE} ${GRUDGE}`;
}

function sha256Hex(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function main(): void {
  const line = composeLine();
  const codePoints = Array.from(line).length;
  if (codePoints < 1 || codePoints > MAX_CHARS) {
    throw new Error(`entry is ${codePoints} characters, outside the 1-140 gate`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  // Verify by hash, not by string comparison: the bytes on disk must hash
  // to exactly the hash of the composed line.
  const written = readFileSync(outPath);
  if (sha256Hex(written) !== sha256Hex(Buffer.from(line, "utf8"))) {
    throw new Error("entry.txt verification failed: bytes on disk do not match the fridge text");
  }

  console.log(`wrote ${outPath} (${codePoints} characters)`);
}

main();
