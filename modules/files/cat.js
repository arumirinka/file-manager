import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';

export const cat = async (pathToFile) => {
  try {
    const file = resolve(pathToFile);
    const readStream = createReadStream(file, { encoding: 'utf-8' });
    readStream.on('data', (chunk) => {
      console.log(chunk);
    });
    readStream.on('error', () => {
      console.log('Operation failed');
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
