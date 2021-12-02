const express = require('express');
const router = express.Router();
const { Blog, User} = require('../../models');
const bcrypt = require("bcrypt");


router.get("/",(req,res)=>{
    User.findAll({
        include:[Blog]
    }).then(dbUsers=>{
        if(dbUsers.length){
            res.json(dbUsers)
        } else {
            res.status(404).json({message:"No users found!"})
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"Error:",err:err})
    })
})

router.post("/signin",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            req.session.destroy();
            res.status(401).json({message:"Incorrect email or password"})
        } else {
            if(bcrypt.compareSync(req.body.password,foundUser.password)){
                req.session.user = {
                    username:foundUser.username,
                    email:foundUser.email,
                    id:foundUser.id
                }
                res.json(foundUser) 
            } else {
                res.status(401).json({message:"Incorrect email or password"})
                req.session.destroy();
            }
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
})

router.post("/signup",(req,res)=>{
    req.session.destroy();
    User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    }).then(newUser=>{
        res.json(newUser);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message:"Error:",err:err})
    })
})

router.get("/logout",(req,res) => {
    req.session.destroy();
    res.render("logout");
})

router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    }).then(delUser=>{
        res.json(delUser)
    })
})

module.exports = router;