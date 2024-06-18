import React, {useState} from "react";
import CommentForm from "./CommentForm";


const Comment = ({ comment, onReply, onUpvote, onDownvote}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    
    return (
        <div className="comment" >
            <div className="comment-content" >
                <p>{comment.text}</p>
                <div>
                    <button onClick={()=> onUpvote(comment.id)} >Upvote</button>
                    <button onClick={() => onDownvote(comment.id)}>Downvote</button>
                    <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
                </div>
                <div>
                    <span> {comment.upvotes} Upvotes</span>
                    <span>{comment.ondownvote}Downvotes</span>
                </div>
            </div>
            {showReplyForm && <CommentForm onSubmit={(text) => onReply(comment.id, text)} />}
            {comment.replies && comment.replies.map(reply => (
                <Comment key={reply.id} comment={reply} onReply={onReply} onUpvote={onUpvote} onDownvote={onDownvote} />
            ))}
        </div>
    )
}

export default Comment;