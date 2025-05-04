import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';

export const hash = async (filePath) => {
    const file = resolve(filePath);
    const newHash = createHash('sha256');
    const readStream = createReadStream(file);
    readStream.on('readable', () => {
      const data = readStream.read();
      if (data)
        newHash.update(data);
      else {
        console.log(newHash.digest('hex'));
      }
    });
    readStream.on('error', (err) => console.log('Operation failed'))
};
