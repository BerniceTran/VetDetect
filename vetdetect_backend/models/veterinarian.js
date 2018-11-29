module.exports = (sequelize, DataTypes) => {
  const Veterinarian = sequelize.define('Veterinarian', {
    vetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    collegeAttended: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  	yearGraduated: {
  	  type: DataTypes.INTEGER,
  	  allowNull: false,
  	  validate: {
  	    notEmpty: true,
  	  },
  	},
    password_hash: {
      type: DataTypes.STRING,
    },
  });

  Veterinarian.associate = (models) => {
    Veterinarian.belongsTo(models.Clinic, {
      foreignKey: "clinicID"
    })
  }  

  // Veterinarian.associate = function(models) {
  //   Veterinarian.belongsTo(models.Clinic, {
  //     foreignKey: 'clinicID',
  //   });
  // };

  //ensures password is not saved in plaintext in database; salt and hash password for us
  Veterinarian.beforeCreate((user) =>  
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

  return Veterinarian;
};
