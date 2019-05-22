const express = require("express");

const register = express.Router();



register.get("/",function(req,res){

    res.render("register")
});

module.exports = register;