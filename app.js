const express = require('express');
const app = express();

const contactsRouter = require('./routes/api/contacts.js');
// app.use(logger('dev'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/contacts', contactsRouter);
module.exports = app;
