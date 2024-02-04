const router = require('express').Router();
const {Post, Comment, User } = require('../models')
console.log(Post)

router.get('/', async (req, res) => {
    try{

        const postData = await Post.findAll({
            include: [
                {
                    model: User, 
                }
            ]
        });
        const posts = postData.map((post) =>
          post.get({plain: true})
        );
        // console.log("Posts:", posts)
        res.render('home', {
            posts,
            layout: 'main',  
          });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;