import { open } from 'node:fs';
import { resolve } from 'node:path';

export const add = async (newFileName) => {
  try {
    const newFilePath = resolve(process.cwd(), newFileName);
    open(newFilePath, 'wx', (err) => err && console.log('Operation failed'));
  } catch (error) {
    console.log('Operation failed');
  }
};
