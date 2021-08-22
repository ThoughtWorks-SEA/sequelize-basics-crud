/* eslint-disable no-console */

// Could explore npmjs package 'loglevel'

const debug = (msg, args) => {
  if (process.env.LOGGER_MODE !== 'DEBUG') return;

  args === undefined ? console.log(msg) : console.log(msg, args);
};

const info = (msg, args) => {
  args === undefined ? console.info(msg) : console.info(msg, args);
};

const error = (msg, args) => {
  args === undefined ? console.error(msg) : console.error(msg, args);
};

export default {
  debug,
  info,
  error
};
