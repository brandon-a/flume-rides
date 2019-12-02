const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const passport = require('./config/passport');

const db = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(flash());
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 's4A66#Bu!KRLBA',
  database: 'flume_rides',
  multipleStatements: true
});

connection.connect(err => {
  if(err) {
    console.log('FAILED INSIDE OF CONNECT: ' + err);
  }
});

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Contro-Allow-Origin", "*");
  res.header("Access-Contro-Allow-Headers", "Origin, X-Requested_With, Content-Type, Accept");
  next();
});

//require('./routes/routes')(app, connection);
// temp code from routes.js *****************************************************************************************
app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', function (err, data) {
      (err)?res.send(err):res.json({users: data});
  });
});


app.post("/api/login", passport.authenticate("local"), (req, res) => {
  var redir;
  console.log("LOGIN");
  //passport.authenticate("local");
  console.log(req.body);
  if(req.user) {
      redir = { redirect: "/profile"};
      res.json(redir);
  } else {
      redir = {redirect: '/login'};
      res.json(redir);
  }
});


  //
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
app.post("/api/signup", function(req, res) {
  console.log(req.body);
  console.log('username: ' + req.body.user.name + 'email: ' + req.body.user.email + ', password hash: ' + req.body.user.password);
  db.user.create({
      name: req.body.user.name,
      email: req.body.user.email,
      school: req.body.user.school,
      passwordHash: req.body.user.password,
      phone: req.body.user.phone,
      car: req.body.user.car,
      major: req.body.user.major
  }).then(function() {
      var redir = { redirect: "/login"};
      res.json(redir);
  }).catch(function(err) {
      var redir = { redirect: "/createaccount"};
      res.json(redir);
      console.log("It's here");
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
  });
});
//
// Route for logging user out
app.post("/logout", function(req, res) {
  req.session.destroy();
  var redir = { redirect: "/" };
  res.json(redir);
});
//
// Route for getting some data about our user to be used client side
app.get("/api/user_data", function(req, res) {
  if (!req.session.passport) {
  // The user is not logged in, send back an empty object
  res.json({});
  }
  else {
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
      email: req.session.passport.user
  });
  }
});

// Display any generic rides in the database so that ride.js is not empty
// when initially rendered
app.get('/display_rides', (req, res) => {
  
  let query = "SELECT * FROM rides;"
  connection.query('SELECT * FROM rides', function (err, data) {
    console.log("hello");
    (err)?res.send(err):res.json({users: data});
});
  // connection.query(query, (err, res) => {
  //   if(err) {
  //       console.log(err);
  //   }
  //   (err)?res.send(err):res.json({rides: res});
  // });
});

// send rides that match the user input when they search for a destination
app.get('/matching_rides', (req, res) => {
  let schoolbool = req.body.obj.activeTab;
  let otherLocation = req.body.obj.google_destination;
  let email = req.session.passport.user;
  let query = "";
  let school = "";

  let school_query = "SELECT school FROM users WHERE email = '" + email + "';"
  connection.query(school_query, (err, res) => {
    if(err) {
        console.log(err);
    }
    school = res;
  });

  // 0 is from, 1 is to school
  // if 0, destination is where user is going to, from their school
  // if 1, destination is actually where user is coming from
  if(schoolbool === 0) {
    query = "SELECT * FROM rides WHERE otherLocation = '" + otherLocation + "' AND school = '" + school + "' AND toschool = '" + 0 + "';";
  } else {
    query = "SELECT * FROM rides WHERE otherLocation = '" + otherLocation + "' AND school = '" + school + "' AND toschool = '" + 1 + "';";
  }
  

  connection.query(query, (err, res) => {
    if(err) {
        console.log(err);
    }
    console.log('successfully queried destination of user');
    console.log(res);
    (err)?res.send(err):res.json({rides: res});
  });
});
  


app.get('/profile', (req, res) => {
  let email = req.session.passport.user;
  console.log(email);
  let query = "SELECT * FROM users WHERE email = '" + email + "';"
  connection.query(query, (err, result) => {
      if(err) {
          console.log(err);
      }
      console.log('successfully queried user profile');
      console.log(result);
      (err)?res.send(err):res.json({users: result});
  });

})

app.post('/new_user', (req, res) => {
  console.log('Creating a new user');
  let name = req.body.user.name;
  let email = req.body.user.email;
  let school = req.body.user.school;
  let password = req.body.user.password;

  //salt = crypto.randomBytes(16).toString('hex'); 
  //hash = crypto.pbkdf2Sync(password, salt,   1000, 64, `sha512`).toString(`hex`); 

  console.log('name: ' + name + ', email: ' + email);

  let query = "INSERT INTO `users` (`name`, `email`, `school`, `passwordHash`) VALUES ('" + name + "', '" + email + "', '" + school + "', '" + password + "');";

  connection.query(query, (err, result) => {
      if(err){
          console.log(err);
      } 
      console.log('entry added, result was ' + result);
  });
});

app.get('/people_in_ride', (req, res) => {
    // need driver email specifically to get rider emails
    let email = req.body.driver_email;
    // need departure time of the ride
    let datetime = req.body.datetime;


    // may or may not need backticks around email
    let query = "SELECT rider_email FROM `join_ride` WHERE email = '" + email + "' AND '" + datetime + "' ;";  

    connection.query(query, (err, res) => {
        (err)?res.send(err):res.json({users: res});
    });
});


app.post('/new_ride', (req, res) => {
  console.log('Creating a new ride....');
  //let email = req.body.user.email; Need to figure this out
  //TODO: Need to actually get the email address of this user
  let email = req.session.passport.user;

  let school_query = "SELECT school FROM users WHERE email = '" + email + "';"

  console.log('in /new_ride before subquery');
  const school = connection.query(school_query, function(err, result) {

    if(err) {
        //console.log("ERRORRRR");
        console.log(err);
    }
    // oops
    //console.log('result = ' + result + ', result.school = ' + result.school + ', result.body = ' + result.body + ', result.body.school = ' + result.body.school);
    //var obj = JSON.parse(result); 
    //console.log('JSON.parse of result is: ' + obj);
    //console.log(result);
    return result;
  });
  console.log('----in /new_ride after subquery, school proto = ' + school.__proto__);
  console.log('--------------------------------------------------');
  console.log(school);

  let datetime = req.body.ride_entry.datetime;
  let otherLocation = req.body.ride_entry.otherLocation;
  let toSchool = req.body.ride_entry.schoolBool;
  let cost = req.body.ride_entry.cost;

  console.log('QUERYING RIDE TABLE TO ADD THIS RIDE');
  let query = "INSERT INTO `rides` (`email`, `datetime`, `otherLocation`, `school`, `toschool`, `cost`, `spotsAvailable`) VALUES ('" + email + "', "  + datetime + "', '" + otherLocation + "', '" + school + "', '" + toSchool + "', " + cost + "', 3);";

  connection.query(query, (err, result) => {
    //print as a delay
    console.log("printing main query")
      if(err){
          console.log(err);
      } 
      console.log('entry added, result was ' + result);
  });


});

//app.post('/join_ride')

// temp code from routes *****************************************************************************************

db.sequelize.sync().then(function() {
  app.listen(3001, function() {
    console.log("Listening on port 3001");
  });
});
// app.listen(3001, () => {
//     console.log(`Flumes_Rides Listening on port 3001`)
// });