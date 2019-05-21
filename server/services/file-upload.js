const aws = require('aws-sdk')
//const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')

const config = require('../config/config')

aws.config.update({
  secretAccessKey: config.SECRET_ACCESS_KEY,
  accessKeyId: config.ACCESS_KEY_ID,
  region: 'us-east-2'
});
 
const s3 = new aws.S3()
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'hired-images',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'META_DATA!'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;