// middlewares/authMiddleware.js

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send('Unauthorized');
  }
  
  module.exports = isAuthenticated;
  