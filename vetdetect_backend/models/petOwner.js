module.exports = (sequelize, DataTypes) => {
  const PetOwner = sequelize.define('PetOwner', {
    ownerID: {
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
    password_hash: {
      type: DataTypes.STRING,
    },
  });

  PetOwner.associate = (models) => {
    Pet.hasMany(models.Pet, {
      foreignKey: "petID"
    })
  }  

  // PetOwner.associate = function(models) {
  //   PetOwner.hasMany(models.Pet, {
  //     foreignKey: 'petID',
  //   });
  // };

  //ensures password is not saved in plaintext in database; salt and hash password for us
  User.beforeCreate((user) =>  
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

  return PetOwner;
};
