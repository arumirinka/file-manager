import { createReadStream, createWriteStream } from 'node:fs';
import { join, parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliDecompress } from 'node:zlib';

export const decompress = async (pathToFile, pathToDest) => {
  try {
    const file = resolve(pathToFile);
    const dest = resolve(pathToDest);
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(join(dest, parse(file).name));
    await pipeline(readStream, createBrotliDecompress(), writeStream);
  } catch (error) {
    console.log('Operation failed');
  }
};
