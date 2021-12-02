const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json(req.session);
})

router.get("/secretclub",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome:, ${req.session.user.username}!`)
    } else{
        res.status(401).send("Login First")
    }
})

module.exports = router;