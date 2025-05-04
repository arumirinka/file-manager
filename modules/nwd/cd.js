import path from 'path';

export const cd = async (destination) => {
  try {
    const destPath = path.resolve(...destination.split(' '));
    process.chdir(destPath);
  } catch (error) {
    console.log('Operation failed');
  }
};
