const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
// const pageRoutes = rou

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")))

app.set("views",)

const re = require("./routes/register");
app.use("/register",re);


app.get("/",function(req,res){

    res.render("index");
});
app.listen(port,function(){
    console.log(`Àpp listern ${port}`);
})