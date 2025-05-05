const Firebase = require('firebase-admin');


const serviceAccount = require('../drive-3e4ba-firebase-adminsdk-fbsvc-4876e80bae.json');

const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: 'drive-3e4ba.firebasestorage.app'
});

module.exports = Firebase;