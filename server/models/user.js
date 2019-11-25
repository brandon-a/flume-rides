// Requiring bcrypt for password hashing. Using the bcryptjs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        isEmail: true
      }
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    // The password cannot be null
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        unique: true
    },
    car: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        unique: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        unique: false
    }
  },
  {
    timestamps: false
  
  });
  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(passwordHash) {
    return bcrypt.compareSync(passwordHash, this.passwordHash);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password

//   User.hook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
  User.beforeCreate(user => {
     user.passwordHash = bcrypt.hashSync(
       user.passwordHash,
        bcrypt.genSaltSync(10),
        null
      );
    });
  return User;
};

