const sequelize = require('../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const PersonalInfo = require('./facultyPersonalInfoModel')

const EducationInfo = sequelize.define('faculty_education_info', {
    // Model attributes are defined here
    educInfoId: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    institutionSchool: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    degreeCert: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    majorSpecialization: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    endDate: {
        type: DataTypes.DATE,
        validate: {
            isDate: true
        }
    }
  });

  EducationInfo.belongsTo(PersonalInfo, {foreignKey: 'facultyId'});
  
  module.exports = EducationInfo