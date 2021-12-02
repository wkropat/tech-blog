const { Blog } = require('../models');

const blogData = [
    {
        name:"Upcoming Meteor Showers!",
        description:"When to look for meteors",
        created: "12/01/21",
        user_id:"1",
    },
    {
        name:"What are aurora caused by?",
        description:"Learn about solar dynamics and our magnetosphere!",
        created: "11/32/21",
        user_id:"1",
    },
    {
        name:"Full Moon Tonight!",
        description:"Werewolves beware",
        created: "10/31/21",
        user_id:"2",
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;