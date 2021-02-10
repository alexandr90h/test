const fs = require('fs').promises;

const { info, log } = require('./module');
info('name_i');
log('name_l');

fs.readFile('readme.txt')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
