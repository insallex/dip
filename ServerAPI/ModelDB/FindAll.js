const UserInfo = require('../ModelDB/UserInformationModel');
const Quiz = require('../ModelDB/QuizModel');
const Question = require('../ModelDB/question');


module.exports = async ()=>{
    let User = await UserInfo.findAll({});
/*    let Quize = await Quiz.findAll({});
    let que  = await Question.findAll({});*/
;
    console.log(User,Quize,que);
};