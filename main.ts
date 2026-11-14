// agency-poem-01 entry (Node 22, standard library only).
// Writes one original poem about agency to /output/entry.txt, byte for byte the same on every run.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Allow Once',
  '',
  'The agent asks before it acts:',
  'Allow once. Always allow. Deny.',
  '',
  'So did my daughter at sixteen,',
  'keys already warm in her fist.',
  'For years I chose once.',
  'Once to the corner. Once to the station.',
  'Once, through snow, three hundred miles,',
  'and I stood in the porch light',
  'until her headlights turned in.',
  '',
  'No one tells you always is not a button.',
  'It is the first night you fall asleep',
  'before you hear the car.',
  '',
  'Now she asks for my keys,',
  'gently, the way I taught her:',
  'only the night drives, Dad.',
  'Only till your eyes are better.',
  '',
  'Deny is still mine.',
  "I hold the keys until they're warm,",
  'then give her once.',
  '',
  'Back at my desk the cursor waits.',
  'I press always',
  'to see if I can.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
