import { access, constants, createReadStream, createWriteStream } from 'node:fs';
import { join, parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { rm } from './rm.js';

export const mv = async (pathToFile, pathToDest) => {
  try {
    const file = resolve(pathToFile);
    access(file, constants.F_OK, async (err) => {
      if (err) {
        console.log('Operation failed');
      } else {
        const dest = resolve(pathToDest);
        const readStream = createReadStream(file);
        const writeStream = createWriteStream(join(dest, parse(file).base));
        await pipeline(readStream, writeStream);
        await rm(file);
      }
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
