// news-image-20261122 entrypoint.
// The finished image is the committed entry.png beside this file; the program
// copies it to the grader's output directory. Node 22 standard library only.
//
// The grader writes to /output. Locally, point MAKEFUN_OUTPUT_DIR elsewhere:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('./entry.png', import.meta.url));

let size: number;
try {
  size = statSync(src).size;
} catch {
  console.error(`entry.png not found beside main.ts: ${src}`);
  process.exit(1);
}
if (size === 0) {
  console.error(`entry.png is empty: ${src}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');

mkdirSync(dirname(dst), { recursive: true });
copyFileSync(src, dst);
console.log(`wrote ${dst} (${size} bytes)`);