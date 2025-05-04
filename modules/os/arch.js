import { arch as archOS } from 'os';

export const arch = () => {
  console.log(archOS());
};
