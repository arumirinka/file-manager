export const up = async () => {
  try {
    process.chdir('..');
  } catch (error) {
    console.log('Operation failed');
  }
};
