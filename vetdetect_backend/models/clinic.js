module.exports = (sequelize, DataTypes) => {
  const Clinic = sequelize.define('Clinic', {
    id: {
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
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
	zip: {
	  type: DataTypes.INTEGER,
	  allowNull: false,
	  unique: true,
	  validate: {
	    notEmpty: true,
	  },
	},
	latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },

    Clinic.associate

  });

  return Clinic;
};
