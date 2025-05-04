import { rm as rmFS } from 'node:fs';
import { resolve } from 'node:path';

export const rm = async (pathToFile) => {
  try {
    const file = resolve(pathToFile);
    rmFS(file, { force: false }, (err) => {
      if (err) console.log('Operation failed');
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
