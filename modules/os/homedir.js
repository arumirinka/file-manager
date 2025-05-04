import { homedir as homedirOS } from 'os';

export const homedir = () => {
  console.log(homedirOS());
};
