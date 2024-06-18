const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const { Timestamp } = require('mongodb');

router.get('/', async(req, res) => {
    const sort = req.query.sort || 'time';
    let sortCriteria = {};
    if (sort === 'score'){
        sortCriteria = {upvotes : -1, downvotes : 1};
    } else if(sort === 'time'){
        sortCriteria = {timestamp : 1};
    }
    const comments = await Comment.find().sort(sortCriteria);
    res.json(comments)
});

router.post('/', async (req, res) => {
    const newComment = new Comment({
        text : req.body.text
    });
    await newComment.save();
    res.json(newComment)
});

router.post('/:id/reply', async (req, res)=> {
    const comment = await Comment.findOne({id : req.params.id});
    if (comment) {
        const reply = {
            id : uuidv4(),
            text : req.body.text,
            timestamp : new Date(),
            upvotes : 0,
            downvotes : 0,
            replies : []
        };
        comment.replies.push(reply);
        await comment.save();
        res.json(reply);
    }else {
        res.status(404).send('Comment not found');
    }
});

router.post('/:id/upvotes', async (req, res) => {
    const comment = await Comment.findOne({id : req.params.id});
    if (comment){
        comment.upvotes += 1;
        await comment.save();
        re.json(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

router.post('/:id/downvote', async (req, res) => {
    const comment = await Comment.findOne({id : req.params.id});
    if(comment){
        comment.downvotes +=1;
        await comment.save();
        res.json(comment);
    } else {
        res.status(404).send('comment not found');
    }
} );

module.export = router;