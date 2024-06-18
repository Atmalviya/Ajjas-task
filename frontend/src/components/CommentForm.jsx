import { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onAddComment) onAddComment(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

CommentForm.propTypes = {

}

export default CommentForm;
