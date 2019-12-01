// Requiring bcrypt for password hashing. Using the bcryptjs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
  
  }, {
    hooks: {
      beforeCreate: function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      }
    }
  });

  User.prototype.validPassword = function(passwordHash) {
    console.log("validating password");
    return bcrypt.compareSync(passwordHash, this.passwordHash);
  };
 
  return User;
};

