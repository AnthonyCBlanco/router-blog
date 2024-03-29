const Post = require('./Post')
const User = require('./User')
const Comment = require('./Comment')

User.hasMany(Post)
User.hasMany(Comment)
Post.belongsTo(User)
Post.hasMany(Comment)
Comment.belongsTo(Post)

module.exports = {Post, User, Comment}