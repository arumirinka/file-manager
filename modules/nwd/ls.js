import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    const dirContent = await readdir(process.cwd(), { withFileTypes: true });
    const content = dirContent.reduce((acc, el) => {
      el.isDirectory() ? acc.dirsArr.push({
        name: el.name,
        type: 'directory'
      }) : acc.filesArr.push({
        name: el.name,
        type: 'file'
      });
      return acc;
    }, {
      dirsArr: [],
      filesArr: []
    });
    console.table([...content.dirsArr, ...content.filesArr]);
  } catch (error) {
    console.log('Operation failed');
  }
};
