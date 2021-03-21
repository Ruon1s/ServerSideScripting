'use strict';
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });
const catController = require('../controllers/catController');

router.get('/cats', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), (req, res) => {
    res.send('With this endpoint you can add cats')
});
router.put('/put', (req, res) => {
    res.send('With this endpoint you can edit cats')
});
router.delete('/delete', (req, res) => {
    res.send('With this endpoint you can delete cats')
});

module.exports = router;
