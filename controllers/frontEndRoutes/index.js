const express = require('express');
const router = express.Router();
const {Comment, Blog, User}  = require("../../models")

router.get('/',(req,res)=>{
    Blog.findAll({
        order:["id"],
        include:[User]
    }).then(blogData=>{
        const hbsblogs = blogData.map(blog=>blog.get({plain:true}))
        res.render("home",{
            blogs:hbsblogs
        })
    })
})

router.get("/profile/:id",(req,res)=>{
    console.log(req);
    if(!req.session.user){
        return res.status(401).render("blocked")
    }
    User.findByPk(req.params.id,{
        include:[Blog]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

router.get("/blogs/:id", async(req,res)=>{
    try {
        const dbBlogData = await Blog.findByPk(req.params.id, {
            include:[User,Comment]
        });
        const blog = dbBlogData.get({ plain: true });
    
        res.render('blog', { blog });
      } catch (err) {
        res.status(500).json(err);
      }
})

router.get("/comments/:id", async(req,res)=>{
    try {
        const dbCommentData = await Comment.findByPk(req.params.id, {
            include:[Blog]
        });
        const comment = dbCommentData.get({ plain: true });
    
        res.render('comment', { comment });
      } catch (err) {
        res.status(500).json(err);
      }
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

module.exports = router;