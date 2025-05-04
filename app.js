import { up } from './modules/nwd/up.js';
import { cd } from './modules/nwd/cd.js';
import { ls } from './modules/nwd/ls.js';
import { cat } from './modules/files/cat.js';
import { add } from './modules/files/add.js';
import { mkdir } from './modules/files/mkdir.js';
import { rn } from './modules/files/rn.js';
import { cp } from './modules/files/cp.js';
import { mv } from './modules/files/mv.js';
import { rm } from './modules/files/rm.js';

const app = async () => {
  const username = process.argv.find((arg) => arg.startsWith('--username='))?.split('=')?.[1] || 'guest';
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${process.cwd()}`);
  console.log('Please print your command and wait for results...');

  process.stdin.on('data', async (chunk) => {
    const inputStr = chunk.toString().trim();
    if (inputStr === 'up') {
      up();
    } else if (inputStr.startsWith('cd ')) {
      cd(inputStr.slice(3));
    } else if (inputStr === 'ls') {
      ls();
    } else if (inputStr.startsWith('cat ')) {
      cat(inputStr.slice(4));
    } else if (inputStr.startsWith('add ')) {
      add(inputStr.slice(4));
    } else if (inputStr.startsWith('mkdir ')) {
      mkdir(inputStr.slice(6));
    } else if (inputStr.startsWith('rn ')) {
      const params = inputStr.slice(3).split(' ');
      params.length === 2 ? rn(...params) : console.log('Invalid input');
    } else if (inputStr.startsWith('cp ')) {
      const params = inputStr.slice(3).split(' ');
      params.length === 2 ? cp(...params) : console.log('Invalid input');
    } else if (inputStr.startsWith('mv ')) {
      const params = inputStr.slice(3).split(' ');
      params.length === 2 ? mv(...params) : console.log('Invalid input');
    } else if (inputStr.startsWith('rm ')) {
      const params = inputStr.slice(3).split(' ');
      params.length === 1 ? rm(...params) : console.log('Invalid input');
    } else if (inputStr === '.exit') {
      process.exit();
    } else {
      console.log('Invalid input');
    }
    console.log(`You are currently in ${process.cwd()}`);
  });

  process.on('SIGINT', () => process.exit());
  process.on('exit', () => console.log(`Thank you for using File Manager, ${username}, goodbye!`));
};

await app();
