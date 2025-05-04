import { availableParallelism, cpus as cpusOS } from 'os';

export const cpus = () => {
  console.log('CPUs amount:', availableParallelism());
  cpusOS().forEach((cpu) => console.log(`Model: ${cpu.model.trim()}. Clock rate: ${cpu.speed / 1000}GHz`));
};
