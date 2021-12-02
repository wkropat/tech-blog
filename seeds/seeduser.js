const { User } = require('../models');

const seedUsers = async () => {
    const userData = await User.bulkCreate([
        {
            username:"whitney",
            password:"password",
            email:"whit@whit.whit"
        },
        {
            username:"alex",
            password:"password",
            email:"alex@alex.alex"
        }
    ],{
        individualHooks:true
    });
}
 

module.exports = seedUsers;