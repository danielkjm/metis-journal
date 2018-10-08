const router = require('express').Router();
const Entry = require('../db/entry.js');

router.get('/', async (req, res, next) => {
  try {
    const entries = await Entry.findAll();
    res.json(entries);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newEntry = await Entry.create(req.body);
    res.json(newEntry);
  } catch (err) {
    next(err);
  }
});

router.get('/:entryId', async (req, res, next) => {
  try {
    const entry = await Entry.findById(req.params.entryId);
    res.json(entry);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
