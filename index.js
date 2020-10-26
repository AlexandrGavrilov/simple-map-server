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
app.use(express.static('client/build'));

app.use(cors({
  credentials: true,
  origin: true,
}))

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.use('/api/user', userRoute);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('Connected to DB')
)

app.listen(3030, () => console.log('Server in running'));
