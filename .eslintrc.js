const eslintrc = require('./src/eslintrc');

const config = eslintrc();

module.exports = {
  ...config,
  env: {
    ...config.env,
    node: true,
  },
};
