import { rename } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

export const rn = async (filePath, newName) => {
  try {
    const file = resolve(filePath);
    const newFileName = join(dirname(file), newName);

    rename(file, newFileName, (err) => {
      if (err) console.log('Operation failed');
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
