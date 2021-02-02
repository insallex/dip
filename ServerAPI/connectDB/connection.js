const Sequlize = require('sequelize');

let sequilize =  new Sequlize('diploma','root','1234',{
   dialect:'mysql',
   port:'3306',
   host:'localhost',
   define:{
       timestamps:false
   }
});
module.exports = sequilize;