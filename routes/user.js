const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation/auth');
const tokenVerify = require('./tokenVerify');


router.post('/register', async (req, res) => {
  const { login, password } = req.body;

  const error = registerValidation({ login, password })

  if (error) {
    const { details: [{ message }] } = error;
    return res.status(409).send(message)
  }

  const hasUserExist = await User.findOne({ login })
  if(hasUserExist) return res.status(409).send('user exist');

  const salt = await bcrypt.genSalt(10);
  const hasPass = await bcrypt.hash(password, salt);

  const user = new User({ login, password: hasPass });

  try {
    await user.save()
    const token = jwt.sign({ id: user._id }, process.env.SECRED);
    res.send({ login: user.login, token, markers: user.markers });
  } catch (e) {
    res.status(400).send(e);
  }
})

router.post('/login', async (req, res) => {

  const loginToken = req.header('auth-token');

  if (loginToken !== 'undefined') {
    try {
      const verify = jwt.verify(loginToken, process.env.SECRED);
      if (verify) {
        const user = await User.findById(verify.id)
        return res.header('auth-token', loginToken).send({ token: loginToken, login: user.login, markers: user.markers });
      }
    } catch (e) {
      return res.status(400).send('Invalid token');
    }
  }

  const { login, password } = req.body;

  const error = loginValidation({ login, password })

  if (error) {
    const { details: [{ message }] } = error;
    return res.status(409).send(message)
  }

  const user = await User.findOne({ login })
  if(!user) return res.status(400).send('Email or password is wrong')

  const validPass = await bcrypt.compare(password, user.password)
  if(!validPass) return res.status(400).send('Email or password is wrong')

  const token = jwt.sign({ id: user._id }, process.env.SECRED);

  res.header('auth-token', token).send({ token, login: user.login, markers: user.markers });
})

router.post('/markers', tokenVerify, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { $set: { markers: req.body } })
    res.send('saved')
  } catch (e) {
    res.status(400).send('Invalid markers')
  }
})

router.get('/markers', tokenVerify, async (req, res) => {
  try {
    const { markers } = await User.findById(req.user.id)
    res.send(markers);
  } catch (e) {
    res.status(400).send('Invalid markers')
  }
})

module.exports = router;
