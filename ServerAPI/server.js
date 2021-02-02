const server = require('express');
const app  = server();
const bodyParser = require('body-parser');
const ActivateDB = require('../ServerAPI/connectDB/activateDB');
const FindAll = require('../ServerAPI/ModelDB/FindAll');
const ExamplePostController = require('../ServerAPI/Controllers/ExampleControllerDB');
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/getDB',async (req,res)=>{
        console.log('res');
        await FindAll();
});
app.post('/returnDb',ExamplePostController);

app.listen(3001,async()=>{
    await ActivateDB();
    console.log(
        'Server has been started!'
    )
});