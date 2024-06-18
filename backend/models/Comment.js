const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid')

const commentSchema = new mongoose.Schema({
    id : {type : String, default : uuidv4},
    text : String,
    Timestamp : {type : Date, default : Date.now},
    upvotes : {type : Number, default : 0},
    downvotes : {type : Number, default : 0},
    replies : {type : Array, default : []} 

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

