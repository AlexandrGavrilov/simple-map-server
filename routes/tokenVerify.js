const jwt = require('jsonwebtoken');


const middleware = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) return res.status(401).send('No auth-token');

  try {
    const verify = jwt.verify(token, process.env.SECRED);
    if (verify) {
      req.user = verify;
      next()
    }
  } catch (e) {
    res.status(400).send('Invalid token');
  }
}

module.exports = middleware;
