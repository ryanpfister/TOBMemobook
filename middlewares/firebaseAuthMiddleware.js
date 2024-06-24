// middlewares/firebaseAuthMiddleware.js

const firebaseAdmin = require('../firebaseAdmin'); // Adjust the path as per your folder structure

async function firebaseAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    res.status(401).send('Unauthorized');
  }
}

module.exports = firebaseAuth;
