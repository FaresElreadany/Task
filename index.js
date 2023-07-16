
var express = require('express')
var app = express()


const getUsers = require('./assets/Users');
const getSports = require('./assets/Sports');
const getAnimals = require('./assets/Animals');

app.get('/users/get', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get('/sports/get', async (req, res) => {
  const sports = await getSports();
  res.json(sports);
});

app.get('/animals/get', async (req, res) => {
  const animals = await getAnimals();
  res.json(animals);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});




