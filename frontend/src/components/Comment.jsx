import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ comment, onReply, onUpvote, onDownvote }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReply = (text) => {
    onReply(comment.id, text);
    setShowReplyForm(false);
  };

  return (
    <div className="comment">
      <div className="comment-text">{comment.text}</div>
      <div className="comment-actions">
        <button onClick={() => onUpvote(comment.id)}>Upvote ({comment.upvotes})</button>
        <button onClick={() => onDownvote(comment.id)}>Downvote ({comment.downvotes})</button>
        <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
      </div>
      {showReplyForm && <CommentForm onAddComment={handleReply} />}
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
