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
  'At the edge of my files the agent stops',
  'and asks, the way my daughter asked',
  'at the end of the drive, engine running,',
  'if she could take the car to the corner alone.',
  '',
  'Allow once. Always allow. Deny.',
  '',
  'For years I chose once.',
  'Once to the corner. Once to the station.',
  'Once, in snow, to a city I had never seen,',
  'and I stood under the porch light',
  'until her headlights turned in.',
  '',
  'No one tells you always is not a button.',
  'It is the first night you fall asleep',
  'before you hear the car.',
  '',
  'Tonight it asks again. I read the line',
  'it wants to run, the way you read a face,',
  'and somewhere in me a porch light',
  'clicks off.',
  'Always, I tell it,',
  'and go up to bed',
  'before I hear it finish.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
