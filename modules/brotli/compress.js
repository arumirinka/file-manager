import { createReadStream, createWriteStream } from 'node:fs';
import { join, parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';

export const compress = async (pathToFile, pathToDest) => {
  try {
    const file = resolve(pathToFile);
    const dest = resolve(pathToDest);
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(join(dest, `${parse(file).base}.br`));
    await pipeline(readStream, createBrotliCompress(), writeStream);
  } catch (error) {
    console.log('Operation failed');
  }
};
