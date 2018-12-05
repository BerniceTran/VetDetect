module.exports = (sequelize, DataTypes) => {
  const VetService = sequelize.define('VetService', {
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
      primaryKey: true
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      },
    },
  });

  // VetService.associate = (models) => {
  //   VetService.belongsToMany(models.Clinic, {
  //     foreignKey: "clinicID"
  //   })
  // }  

  return VetService;
};
