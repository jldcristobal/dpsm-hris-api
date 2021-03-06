const sequelize = require('../../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const PersonalInfo = require('../personal/personalInfoModel')

const WorkExpInfo = sequelize.define('faculty_work_exp_info', {
    // Model attributes are defined here
    workExpId: {
        type: DataTypes.INTEGER(8),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    employerName: {
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
    },
    position: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
  });

  PersonalInfo.hasMany(WorkExpInfo, {foreignKey: 'facultyId'})
  WorkExpInfo.belongsTo(PersonalInfo, {foreignKey: 'facultyId'});
  
  module.exports = WorkExpInfo