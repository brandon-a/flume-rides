module.exports = function(app, connection) {
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
    
    app.get('/profile', (req, res) => {
        email = "BA@gmail.com";
        console.log(email);
        let query = "SELECT * FROM Flumes_Rides.users WHERE email = '" + email + "';"
        connection.query(query, (err, result) => {
            if(err) {
                console.log(err);
            }
            console.log('successfully queried');
            console.log(result);
            // const user = {
            //     name: result.name,
            //     phone: result.phone,
            //     email: result.email,
            //     school: result.school,
            //     major: result.major,
            //     car: result.car
            // };
            (err)?res.send(err):res.json({users: result});
        });

    })
    
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
}