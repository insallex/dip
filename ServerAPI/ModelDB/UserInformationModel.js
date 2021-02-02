const Sequelize = require('sequelize');
const sequlize = require('../connectDB/connection');

const UserInfo = sequlize.define('user_information',{
    id_user:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    name_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password_user:{
        type:Sequelize.STRING,
        allowNull: false
    },
    login_user:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    rank_user:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    military_unit:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    point_in_test:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    level_user:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    last_lesson:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports = UserInfo;