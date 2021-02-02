const exampleInst = require('../MethodDB/EXAMPLEInsertInfo');

module.exports = async (req,res)=>{
    let {name,login,password,rank,military_unit,point,level,last_lesson} = req.body;
    let result = await exampleInst(name,login,password,rank,military_unit,point,level,last_lesson);
    console.log(result);
};