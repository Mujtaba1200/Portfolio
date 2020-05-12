const express = require ("express");
const app = express();
const port = 3000;
const path = require ("path");

app.use(express.static('client'));

app.listen(port, function(error) {
    if(error) {
        return console.log("something bad happened",error)
    }  
    console.log(`server is listening on ${port}`)
});