import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// contacts.js

/*
 * Раскомментируй и запиши значение*/
const contactsPath = path.resolve(__dirname, 'db/contacts.json');

// TODO: задокументировать каждую функцию
export default function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(data);
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
// module.exports = listContacts;
