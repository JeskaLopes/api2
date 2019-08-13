const express = require('express');
const router = express.Router();

const mentionsController = require('../controllers/mentions-controllers');

router.get(':id', mentionsController.deleteMentions)
router.delete(':id', mentionsController.deleteMentions);


module.exports = router;







