import { readFile, writeFile } from 'node:fs/promises';

const [, , fileToRead, fileToWrite] = process.argv;
console.log(fileToRead);
console.log(fileToWrite);

try {
  const info = await readFile(fileToRead, 'utf-8');
  console.log(info);
  await writeFile(fileToWrite, info);
} catch (err) {
  console.log(err);
}
