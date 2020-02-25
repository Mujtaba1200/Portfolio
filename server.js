const express = require ("express");
const app = express();
const port = 3000;
const path = require ("path");

app.get("*", function(request,response){
    response.sendFile(path.join(__dirname+"/client/index.html"));
})

app.listen(port, function(error) {
    if(error) {
        return console.log("something bad happened",error)
    }  
    console.log(`server is listening on ${port}`)
});