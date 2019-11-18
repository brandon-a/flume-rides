const crypto = require('crypto');

module.exports = function(app, connection) {
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM users', function (err, data) {
            (err)?res.send(err):res.json({users: data});
        });
    });

    app.post('/login_verify', (req, res) => {
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
    
    app.get('/profile', (req, res) => {
        let email = req.query.email;
        console.log(email);
        let query = "SELECT * FROM Flumes_Rides.users WHERE email = '" + email + "';"
        connection.query(query, (err, result) => {
            if(err) {
                console.log(err);
            }
            console.log('successfully queried');
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

    app.post('/new_ride', (req, res) => {
        console.log('Creating a new ride....');
        //let email = req.body.user.email; Need to figure this out
        //TODO: Need to actually get the email address of this user
        let datetime = req.body.ride_entry.datetime;
        let destination = req.body.ride_entry.destination;
        let source_location = req.body.ride_entry.source_location;
        let cost = req.body.ride_entry.cost;

        console.log('datetime: ' + datetime + ', destination: ' + destination);
        let query = "INSERT INTO `rides` (`email`, `datetime`, `destination`, `source_location`, `toschool`, `cost`, `spotsAvailable`) VALUES ('test@sjsu.edu', '" + datetime + "', '" + destination + "', '" + source_location + "', 1, '" + cost + "', 4);";

        connection.query(query, (err, res) => {
            if(err){
                console.log(err);
            } 
            console.log('entry added, result was ' + res);
        });


    });
}
