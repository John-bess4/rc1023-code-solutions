import { writeFile } from 'node:fs/promises';

const [, , arg] = process.argv;
console.log(arg);

try {
  await writeFile('note.txt', arg + '\n', 'utf-8');
} catch (err) {
  console.log(err);
}
