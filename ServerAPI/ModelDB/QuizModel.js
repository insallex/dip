const sequelize = require('../connectDB/connection');
const Sequelize = require('sequelize');
const Question = require('../ModelDB/question');

const Quiz = sequelize.define('quiz',{
    id_quiz:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title_quiz:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    quizSynopsis: {
        type:Sequelize.STRING,
        allowNull:false,
    },
});
Quiz.hasMany(Question,{onDelete:'cascade',foreignKey:'id_quiz_fk'});

module.exports = Quiz;