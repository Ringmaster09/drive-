const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-3e4ba-firebase-adminsdk-fbsvc-4876e80bae.json');

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName:'drive-3e4ba.firebasestorage.app',
  unique:true
});

const upload=multer({
    storage: storage,
})

module.exports=upload;
