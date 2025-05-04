import { userInfo } from 'os';

export const username = () => {
  console.log(userInfo().username);
};
