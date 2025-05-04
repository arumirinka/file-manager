import { createReadStream, createWriteStream } from 'node:fs';
import { join, parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';

export const cp = async (pathToFile, pathToDest) => {
  try {
    const file = resolve(pathToFile);
    const dest = resolve(pathToDest);
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(join(dest, parse(file).base));
    await pipeline(readStream, writeStream);
  } catch (error) {
    console.log('Operation failed');
  }
};
