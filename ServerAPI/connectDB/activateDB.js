const sequlize = require('./connection');

module.exports = async ()=>{
    sequlize.sync().then(()=>{
        console.log('connection');
    }).catch(err=>{console.log(err)});
};