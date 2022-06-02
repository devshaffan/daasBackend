const express = require('express');
const router = express.Router();
const datasets = require('../controllers/datasets');
const uploadFile = require('../middleware/uploadCsv');

router.get('/getAll', datasets.getAllDatasets);
router.post('/create', uploadFile.single("file"),datasets.createDataset)
router.get('/byId/:id', datasets.getDatasetById)
module.exports = router;


