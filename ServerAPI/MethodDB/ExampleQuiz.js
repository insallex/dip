const Quiz = require('../ModelDB/QuizModel');


module.exports = (title,synopsis)=>{
    let result = Quiz.create({
        title_quiz:title,
        quizSynopsis: synopsis,
    });
    return result;
};