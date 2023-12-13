import { writeFile } from 'node:fs/promises';

async function writeRandomNumberToFile(): Promise<void> {
  try {
    const randomNumber = Math.random();
    const dataToWrite = `${randomNumber}\n`;
    await writeFile('random.txt', dataToWrite);

    console.log('Random number has been written to random.txt.');
  } catch (error: any) {
    if (error instanceof Error) {
      console.error('Error writing to file:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }
}

writeRandomNumberToFile();
