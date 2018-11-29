module.exports = (sequelize, DataTypes) => {
  const Insurance = sequelize.define('Insurance', {
    insuranceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      primaryKey: true;
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Insurance.associate = (models) => {
    Insurance.hasMany(models.Pet, {
      foreignKey: "petID"
    })
  }  

  // Insurance.associate = function(models) {
  //   Insurance.belongsTo(models.Pet, {
  //     foreignKey: 'petID',
  //   });
  // };

  return Insurance;
};
