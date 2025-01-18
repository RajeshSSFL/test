console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/test', function(){
    console.log(first);
});


app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
    next();
});

console.log('-: App Running :-');
app.listen(3000);