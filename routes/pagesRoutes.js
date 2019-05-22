const express = require("express");

const pageRoutes = express.Router();

pageRoutes.route("/").get((req,res)=>{

    res.render("index");
});

module.exports = pageRoutes;