import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CommentSection from "./components/CommentSection";
import SortOptions from "./components/SortOptions";
import './CommentSection.css';

function App() {
  const [comments, setComments] = useState([]);
  const [sortOption, setSortOption] = useState("time");

  useEffect(() => {
    fetchComments();
  }, [sortOption]);

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:3000/comments?sort=${sortOption}`
    );
    setComments(response.data);
  };

  const handleAddComment = async (text) => {
    console.log({ text });
    await axios.post("http://localhost:3000/comments", { text });
    fetchComments();
  };

  const handleReply = async (id, text) => {
    console.log("hi")
    try {
      await axios.post(`http://localhost:3000/comments/${id}/reply`, { text });
      fetchComments();
    } catch (error) {
      console.error('Error replying to comment:', error);
    }
  };

  const handleUpvote = async (id) => {
    await axios.post(`http://localhost:3000/comments/${id}/upvote`);
    fetchComments();
  };

  const handleDownvote = async (id) => {
    await axios.post(`http://localhost:3000/comments/${id}/downvotes`);
    fetchComments();
  };

  return (
    <div className="App">
      <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
      <CommentSection
        comments={comments}
        onAddComment={handleAddComment}
        onReply={handleReply}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
    </div>
  );
}

export default App;
