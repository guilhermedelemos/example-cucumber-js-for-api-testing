require('dotenv-flow').config();

module.exports = {
  default: 
    `--format-options '{"snippetInterface": "synchronous"}' 
     --publish-quiet`, // eslint-disable-line quotes
};
