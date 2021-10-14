/* eslint-disable no-console */
import chalk from 'chalk';


export default {
  console,
  debug: (message, ...args) => console.debug(`🐜 ${ message }`, ...args),
  done: (message, ...args) => console.info(chalk.green(`✔ ${ message }`), ...args),
  error: (message, ...args) => console.error(chalk.red(`✖ ${ message }`), ...args),
  info: (message, ...args) => console.info(`${ chalk.cyan('ℹ') } ${ message }`, ...args),
  log: console.log,
  warn: (message, ...args) => console.info(chalk.yellowBright(`❗ ${ message }`), ...args),
};
