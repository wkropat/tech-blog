const { Comment } = require('../models');

const commentData = [
    {
        name:"whitney",
        description:"Saw some great meteors",
        blog_id:"1",
    },
    {
        name:"whitney",
        description:"Fascinating!!",
        blog_id:"2",
    },
    {
        name:"whitney",
        description:"Beware!",
        blog_id:"3",
    },
    {
        name:"alex",
        description:"werewolves are fake",
        blog_id:"3",
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;