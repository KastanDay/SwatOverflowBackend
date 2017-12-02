const express = require('express')
const app = express()

// const UserFile = require("./model/user.js")
// var kastan = new UserFile.User('Kastan');
// console.log(kastan.name); // Print name value to console

// ************************ DATABASE INFO ************************
// User DB
// key = full email address
// Value = User class object
var userDB = {};

// Question DB (a question class contains all of it's own answers)
var postDB = {};

// this becomes a user's UID (first user has UID 0, next has UID 1...)
var totalUsers = 0;
// this becomes a question's postID
var totalQuestions = 0;
// this becomes a answer's postID
var totalAnswers = 0;


class User {
  constructor(email, password, ethAddress, username) {
    this._email = email;
    this._username = username;
    this._password = password;
    this._ethAddress = ethAddress;
    this._UID = totalUsers + 1
    this._paymentDate = 0; // TODO: Today's date.
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

class Answer {

  // member variables
  var freeUpvotes;
  var freeDownvotes;
  var paidUpvotes;
  var paidDownvotes;

  constructor(aTitle, aBody, email) {
    this._aTitle = aTitle;
    this._aBody = aBody;
    this._email = email;
    this._aid = totalAnswers + 1;
    this._date = 0; // today's date
  }
}

class Question {

  // member variables
  var freeUpvotes;
  var freeDownvotes;
  var paidUpvotes;
  var paidDownvotes;

  // Key = answerID
  // Value = answer object
  var answers = {};

  constructor(qTitle, qBody, email) {
    this._qTitle = qTitle;
    this._qBody = qBody;
    this._email = email;
    this._qid = totalQuestions + 1;
    this._date = 0; // today's date
    this._numAnswers = 0;
  }

  // param: answer object
  addAnswer(aTitle, aBody, email) {
    var newAnswer = new Answer(aTitle, aBody, email);
    answers.newAnswer.aid =  newAnswer;
    this._numAnswers += 1;
  }

  get numAnswers() {
    return this._numAnswers;
  }

  get answers() {
    return answers;
  }

  get qTitle() {
    return this._qTitle;
  }

  get qBody() {
    return this._qBody;
  }

  get email() {
    return this._email;
  }

}

// test user
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

  if (userDB.contains(email)){
    // throw error: ACCOUNT ALREADY EXISTS
  }

  // create user object
  var newUser = new User(email, password, ethAddress, username);

  // add to user database (dictionary)
  // key, value = email, User object
  userDB.email = newUser;

  // TODO: return sucessful
  // res.send('it worked!')
})


app.get('/upvote', (req, res) => {

  // QUESTION: How do you know the current user?
  /*
   * Check that user hasn't upvoted that ALREADY
   * Check if user is premium
   *
  */
  var email;
  var postID;





  res.send('ya done good')
})

app.get('/downvote', (req, res) => {
  res.send('Hello World!')
})


app.get('/submitQuestion', (req, res) => {

  var qTitle;
  var qBody;
  var email;

  // check exact question title doesn't already exist
  if( postDB.contains() ){
    // throw error! Exact question already exists!
  }

  // create new question object
  var newQuestion = new Question(qTitle, qBody, email);

  // add question object to DB
  // Key = qid
  // Value = Question object
  postDB.newQuestion.qid = newQuestion;

  // TODO: return sucessful
  // res.send('Hello World!')
})


app.get('/submitAnswer', (req, res) => {

  var aText;
  var email; // email of person answering (or any auth)




  // res.send('Hello World!')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
