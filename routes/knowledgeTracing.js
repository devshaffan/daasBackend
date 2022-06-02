const express = require('express');
const router = express.Router();
const knowledgeTracing = require('../controllers/knowledgeTracing');

router.get('/getAll', knowledgeTracing.getALL);
router.post('/create', knowledgeTracing.create)
router.post('/update/:id', knowledgeTracing.update)
router.get('/byId/:id', knowledgeTracing.getById)
router.get('/bySkillName/:skillname', knowledgeTracing.getBySkillName)
module.exports = router;


