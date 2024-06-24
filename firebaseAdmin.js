// firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('./memobook-f7223-firebase-adminsdk-6pbvk-283157c5dd.json'); // Path to your Firebase Admin SDK JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://memobook-f7223.firebaseio.com', // Replace with your Firebase Database URL
});

module.exports = admin;
