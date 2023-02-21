const express = require('express');

const postController = require('../controllers/posts-controllers');
const router = express.Router(); //Export the Router
const checkAuth = require('../middleware/auth')

router.get('/:uid/:pid', postController.getPost)
router.use(checkAuth) //This is a middleware that will be executed for all the routes below
router.post('/:uid/:pid', postController.createPost)
router.patch('/:uid/:pid/upvote', postController.UpvotePost)
router.patch('/:uid/:pid/downvote', postController.DownvotePost)

module.exports = router;