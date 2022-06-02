const fs = require('fs')
const models = require('../models/index');
const s3 = require("../config/aws")
const path = require('path')
const uuidV4 = require('uuid/v4');

const _uniqueId = require('lodash.uniqueid');

exports.getAllDatasets = (req, res) => {
  //  res.json({id : req.params.id})
  models.datasets
    .findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.getDatasetById = (req, res) => {
  //  res.json({id : req.params.id})
  models.datasets
    .find({
      where: {
        id: `${req.params.id}`
      }
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};


exports.createDataset = async (req, res) => {
  const id = uuidV4()
  if (!req.file) {
    res.status(400).send({ message: 'No File Uploaded!' });
    return;
  }
  const key = `userAvatar/-${Date.now()}${req.file.originalname}`
  var params = {
    ACL: 'public-read',
    Bucket: process.env.BUCKET_NAME || "norsa",
    Body: fs.createReadStream(req.file.path),
    Key: key
  };
  s3.upload(params, (err, data) => {
    if (err) {
      //console.log('Error occured while trying to upload to S3 bucket', err);
    }
    if (data) {
      fs.unlinkSync(req.file.path); // Empty temp folder
      const locationUrl = data.Location;
      var insertData = {
        filePath: key,
        id: id,
        accessLink: locationUrl,
        name: req.body.name
      }
      models.datasets
        .create(insertData)
        .then((data) => res.json(data))
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || 'Some error occurred while creating the CLient.',
          });
        });

    }
  });
}

