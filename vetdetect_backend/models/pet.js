module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    petID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  });

  Pet.associate = (models) => {
    Pet.belongsTo(models.PetOwner, {
      foreignKey: "id"
    })
  }

  Pet.associate = (models) => {
    Pet.belongsTo(models.Insurance, {
      foreignKey: "insuranceID"
    })
  }

  // Pet.associate = function(models) {
  //   Pet.belongsTo(models.PetOwner, {
  //     foreignKey: 'ownerID',
  //   });
  // };

  // Pet.associate = function(models) {
  //   Pet.hasOne(models.Insurance, {
  //     foreignKey: 'insuranceID',
  //   });
  // };

  return Pet;
};
