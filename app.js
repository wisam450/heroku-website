const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/",function(req,res){

    res.send("Hallo Heroku");
});
app.listen(port,function(){
    console.log(`Àpp listern ${port}`);
})