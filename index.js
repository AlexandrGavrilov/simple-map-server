const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('cors');
require('dotenv').config();

const userRoute = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: '*',
  preflightContinue: true,
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use('/api/user', userRoute);

app.use(express.static('client/build'));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})


mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('Connected to DB')
)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log('Server in running'));
