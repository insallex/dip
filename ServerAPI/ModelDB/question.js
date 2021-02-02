const sequelize = require('../connectDB/connection');
const Sequelize = require('sequelize');

const Question = sequelize.define('question',{
    id_ques:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    num_question:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    question_text:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    questionType:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    questionPic:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    answerSelectionType:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    correctAnswer:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    messageForCorrectAnswer:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    messageForIncorrectAnswer:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    explanation:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    point_test:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_quiz_fk:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Question;