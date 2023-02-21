const express = require('express');

const postController = require('../controllers/posts-controllers');
const router = express.Router(); //Export the Router

router.get('/:uid/:pid', postController.getPost)
router.post('/:uid/:pid', postController.createPost)
router.patch('/:uid/:pid/upvote', postController.UpvotePost)
router.patch('/:uid/:pid/downvote', postController.DownvotePost)

module.exports = router;