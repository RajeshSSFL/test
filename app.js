console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/one', function(req, res){
    let first = parseInt(Math.random()*10000);
    console.log(first);
    res.send('-: One Test Page :-'+first);
});

app.use('/two', function(req, res){
    //let first = parseInt(Math.random()*10000);
    console.log(first);
    res.send('-: Two Testing Home Page :-'+first);
});


app.use('/three', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Three Home Page :-');
    next();
});


//console.log(second);

console.log('-: App Running :-');
app.listen(3000);