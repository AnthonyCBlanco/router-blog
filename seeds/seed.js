const sequelize = require('../config/connection');
const {Post, Comment, User } = require('../models')

const postSeedData = require('./postSeedData.json')
const userSeedData = require('./userSeedData.json')
const commentSeedData = require('./commentSeedData.json')

const seedDataBase = async () => {
    await sequelize.sync({force: true});
    await User.bulkCreate(userSeedData,  {
        individualHooks: true,
        returning: true,
      });
    await Post.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true,
      });
    await Comment.bulkCreate(commentSeedData,  {
        individualHooks: true,
        returning: true,
      });

    process.exit(0)
}

seedDataBase()