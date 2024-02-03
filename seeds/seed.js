const sequelize = require('../config/connection');
const {Post, Comment, User } = require('../models')

const postSeedData = require('./postSeedData.json')
const userSeedData= require('./userSeedData.json')
const commentSeedData = require('./commentSeedData.json')

const seedDataBase = async () => {
    await sequelize.sync({force: true});
    Post.bulkCreate(postSeedData)
    Comment.bulkCreate(commentSeedData)
    User.bulkCreate(userSeedData)

    process.exit(0)
}

seedDataBase()