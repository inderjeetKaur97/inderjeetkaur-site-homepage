
const express= require("express");
const path = require("path");
const router=express.Router()

router.get("/",(req,res)=>{
    res.render("home",{title:"Inderjeet Kaur | Homepage"})
})
router.get("/home",(req,res)=>{
    res.render("home",{title:"Inderjeet Kaur | Homepage"})
})

module.exports = router

