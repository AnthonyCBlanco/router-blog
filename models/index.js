const Post = require('./Post')
const User = require('./User')
const Comment = require('./User')

Post.hasOne(User)
Post.hasMany(Comment)

module.exports = {Post, User, Comment}