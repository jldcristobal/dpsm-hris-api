const sequelize = require('../../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const User = require('../../../user-enrollment/userEnrollmentModel')

const PersonalInfo = sequelize.define('faculty_personal_info', {
    // Model attributes are defined here
    facultyId: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING(50)
    },
    suffix: {
        type: DataTypes.STRING(3)
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        validate: {
            isDate: true
        },
        allowNull: false
    },
    placeOfBirth: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(6),
        validate: {
            isIn: [['Male', 'Female']]
        },
        allowNull: false
    },
    permanentAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    presentAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    landline: {
        type: DataTypes.STRING(8)
    },
    mobile: {
        type: DataTypes.STRING(11),
        validate: {
            isNumeric: true
        },
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(6),
        validate: {
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    civilStatus: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    religion: {
        type: DataTypes.STRING(50)
    },
    emergencyContactPerson: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    emergencyContactNumber: {
        type: DataTypes.STRING(11),
        validate: {
            isNumeric: true
        },
        allowNull: false
    },
    teachingPhilosophy: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  });

  PersonalInfo.belongsTo(User, {foreignKey: 'userId'})
  User.hasMany(PersonalInfo, {foreignKey: 'userId'});

  module.exports = PersonalInfo