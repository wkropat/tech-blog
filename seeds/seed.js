const sequelize = require("../config/connection")
const seedBlogs = require("./seedblog")
const seedUsers = require("./seeduser")
const seedComments = require("./seedcomment")

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await seedUsers();
    await seedBlogs();
    await seedComments();
    console.log('seeded reviews!')
    process.exit(0);
}

seedMe()