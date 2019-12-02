var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app, connection) {
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
    

/*
    app.post('/api/login', 
        function(req, res, next) {
            console.log('routes.js, login, req.body: ');
            console.log(req.body)
            next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in: ', req.user);
        var userInfo = {
            username: req.user.username,
            redirect: '/profile'
        };
        res.send(userInfo);
    }  
    ) */


    //app.post('/login', checkNotAuthenticated, 
    //passport.authenticate('local', 
    //{
    //    successRedirect: '/',
    //    failureRedirect: '/login',failureFlash: true
    //})
    //)


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
            passwordHash: req.body.user.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log("It's here");
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });
    //
    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });
    //
    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
        }
        else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email
        });
        }
    });

    // app.post('/login_verify', (req, res) => {
    //     email = req.body.email;
    //     password = req.body.password
    
    //     connection.query(query, (err, result) => {
    //         "SELECT name FROM `users` WHERE `email` = '" + email +  "', passwordHash = '" + password + "'; ";
    //         if(err) {
    //             console.log(err);
    //         }
    //         console.log('successfully queried');
    //     });
    // });

    
    app.get('/profile', (req, res) => {
        let email = req.session.name;
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

    app.get('/get_ride_list', (req, res) => {
        connection.query('SELECT * FROM rides', function (err, data) {
            (err)?res.send(err):res.json({users: data});
        });
    });

    
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
