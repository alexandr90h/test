const express = require('express');
const router = express.Router();
const got = require('got');

router.get('/', async (req, res, next) => {
  // const { let, lon } = req.query;
  try {
    res.json({ messages: 'Birds home page' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
