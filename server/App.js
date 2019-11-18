const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const SELECT_ALL_QUERY = 'SELECT * FROM users'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's4A66#Bu!KRLBA',
    database: 'Flumes_Rides'
});

connection.connect(err => {
    if(err) {
        console.log('FAILED INSIDE OF CONNECT: ' + err);
    }
});

// example code started from https://github.com/passport/express-4.x-local-example
// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    function(username, password, cb) {
      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));
  
  
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());
// end example code base

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Contro-Allow-Origin", "*");
    res.header("Access-Contro-Allow-Headers", "Origin, X-Requested_With, Content-Type, Accept");
    next();
});

require('./routes/routes')(app, connection);
app.listen(3001, () => {
    console.log(`Flumes_Rides Listening on port 3001`)
});