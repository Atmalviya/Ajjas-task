import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentSection = ({
  comments,
  onAddComment,
  onReply,
  onUpvote,
  onDownvote
}) => {


  
  return (
    <div>
      <CommentForm onAddComment={onAddComment} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
        />
      ))}
    </div>
  );
};
export default CommentSection;
