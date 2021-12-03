# tech-blog
MVC Tech Blog
router.get("/profile/:id",(req,res)=>{
    console.log(req);
    if(!req.session.user){
        return res.status(401).render("blocked")
    }
    User.findByPk(req.session.user.id,{
        include:[Blog]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})