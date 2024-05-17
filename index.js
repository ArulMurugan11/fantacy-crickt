const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const teamsRoute = require('./routes/team.router')
const usersRoute = require('./routes/user.router')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;
// Database Details
// const DB_USER = process.env.DB_USER;
// const DB_PWD = process.env.DB_PWD;
// const DB_URL = process.env.DB_URL;
// const uri = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_URL}/`;
const uri = 'mongodb://0.0.0.0:27017/task-arul';

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

mongoose.connect(uri).then(
  () => {
    console.log("Database Connected Successfully");
  },
  (error) => {
    console.log("Database Not Connected" + error);
  }
);
app.use("", teamsRoute);
app.use("", usersRoute);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

