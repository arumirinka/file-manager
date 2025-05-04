import { mkdir as mkdirFS } from 'node:fs';
import { resolve } from 'node:path';

export const mkdir = async (newDirName) => {
  try {
    const newDirPath = resolve(process.cwd(), newDirName);
    mkdirFS(newDirPath, { recursive: false }, (err) => {
      if (err) {
        err?.code === 'EEXIST'
          ? console.log('Operation failed: folder already exists')
          : console.log('Operation failed');
      }
    });
  } catch (error) {
    console.log('Operation failed');
  }
};
