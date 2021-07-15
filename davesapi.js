//I SPENT ONE MOTHERFRICKIN HOUR DEBUGGING LINE BY LINE ON EVERYSINGLE METHOD BECAUSE IN POSTMAN SAID NULL EVERY SINGLE RESULT, TURNS OUT I DIDN'T FRICKIN SET IT UP RIGHT 
//IN CASE YOU NEED MY FRICKIN NAME DAVE CALDERON, NOW IF YOU LET ME IM GONNA SMASH MY HEAD WITH THE FRIDGE DOOR :^)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 6661;

app.use(express.json());
app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());

app.all('*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//GET
app.get('/get', (req, res) => {
    res.send('Avenged Sevenfold');
});

//ANGULAR API CHALLENGE
app.get('/click', (req, res) => {
    res.send({result:"Avenged Sevenfold"});
});

//POST
app.post('/post', (req, res) => {
    let song = req.body;
    res.send({"result":song});
});

//PUT
app.put('/put', (req, res) => {
    let div = req.body;
    let resultOfTheDiv = div.firstNum / div.secondNum;
    res.send({"result":resultOfTheDiv});
});

//DELETE
app.delete('/delete', (req, res) => {
    let sum = req.body;
    let resultOfSum = sum.firstNum + sum.secondNum + sum.thirdNum + sum.forthNum + sum.fifthNum;
    res.send({"result":resultOfSum});
});

//GET MARQUEE
app.get('/getalternative', (req, res) => {
    res.send('<marquee>I have ostheoporosis</marquee>'); //I DON'T KNOW WHAT A MARQUEE IS, THAT'S WHY IS SO UGLY AND RAW XD
});

app.listen(port, function(){
    console.log('It lives');
});