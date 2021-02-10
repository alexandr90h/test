import { fileURLToPath } from 'url';
import * as fs from 'fs/promises';
import path from 'path';

// import { listContacts } from './contacts.js';
import listContacts from './contacts.js';
// const fs = require('fs').promises;
import { info, log } from './module.js';
// const { info, log } = require('./module');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

info('name_i');
listContacts();
// log(path.resolve(__dirname, 'bd/contacts.json'));

// fs.readFile('readme.txt')
//   .then(data => console.log(data.toString()))
//   .catch(err => console.log(err.message));
