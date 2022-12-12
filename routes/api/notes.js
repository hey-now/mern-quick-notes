const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesCtrl.index);
// GET /api/notes/:id
router.get('/:id', notesCtrl.show);
// POST /api/notes
router.post('/', notesCtrl.create);

module.exports = router;
