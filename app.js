const express = require('express')
const app = express()

// const UserFile = require("./model/user.js")
// var kastan = new UserFile.User('Kastan');
// console.log(kastan.name); // Print name value to console

// ************************ DATABASE INFO ************************
var userDB = {};

class User {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

var kastan = new User('Kastan');
console.log(kastan.name);


app.get('/', (req, res) => {
  res.send('Hello World!')
  // res.json()
})
app.get('/createUser', (req, res) => {
  var email;
  var password;
  var ethAddress;




  // res.send('Hello World!')
})
app.get('/upvote', (req, res) => {
  res.send('ya done good')
})
app.get('/downvote', (req, res) => {
  res.send('Hello World!')
})
app.get('/submitQuestion', (req, res) => {
  res.send('Hello World!')
})
app.get('/downvote', (req, res) => {
  res.send('Hello World!')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
