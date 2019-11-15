const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const SELECT_ALL_QUERY = 'SELECT * FROM users'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flumes_rides'
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

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', function (err, data) {
        (err)?res.send(err):res.json({users: data});
    });
});

app.get('/login_verify', (req, res) => {
    email = req.body.email;
    password = req.body.password

    connection.query(query, (err, result) => {
        "SELECT name FROM `users` WHERE `email` = '" + email +  "', passwordHash = '" + password + "'; ";
        if(err) {
            console.log(err);
        }
        console.log('successfully queried');
    });
});   

app.post('/new_user', (req, res) => {
    console.log('in post');
    let name = req.body.user.name;
    let email = req.body.user.email;
    let school = req.body.user.school;
    let password = req.body.password;

    console.log('name: ' + name + ', email: ' + email);

    let query = "INSERT INTO `users` (`name`, `email`, `school`, `passwordHash`) VALUES ('" + name + "', '" + email + "', '" + school + "', '" + password + "');";

    connection.query(query, (err, result) => {
        if(err){
            console.log(err);
        } 
        console.log('entry added, result was ' + result);
    });
});


app.listen(3001, () => {
    console.log(`Flumes_Rides Listening on port 3001`)
});