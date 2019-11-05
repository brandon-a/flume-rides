const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_QUERY = 'SELECT * FROM users'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flumes_rides_test'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /products to view')
});

app.get('/products/add', (req, res) => {
    const {id, user_name} = req.query;
    console.log(id, user_name);
    res.send('adding user');
});

app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.listen(3000, () => {
    console.log(`Flumes_Rides Listening on port 3000`)
});