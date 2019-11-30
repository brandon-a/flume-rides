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
  database: 'Flumes_Rides'
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

require('./routes/routes')(app, connection);

db.sequelize.sync().then(function() {
  app.listen(3001, function() {
    console.log("Listening on port 3001");
  });
});
// app.listen(3001, () => {
//     console.log(`Flumes_Rides Listening on port 3001`)
// });