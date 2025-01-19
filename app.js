console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/test', function(req, res){
    let first = parseInt(Math.random()*10000);
    console.log(first);
    res.send('-: Test Page :-'+first);
});

app.use('/newtesting', function(req, res){
    //let first = parseInt(Math.random()*10000);
    console.log(first);
    res.send('-: Testing Home Page :-'+first);
});


app.use('/getu', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Home Page :-');
    next();
});


//console.log(second);

console.log('-: App Running :-');
app.listen(3000);