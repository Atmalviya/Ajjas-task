import React, {useState} from "react";

const CommentForm = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e)=>{
        console.log("submit button triigerd")
        e.preventDefault();
        onSubmit(text);
        setText('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea name="" id="" value={text} onChange={(e) => setText(e.target.value)} required ></textarea>
            <button type="submit" >Submit</button>
        </form>
    )
}

export default CommentForm;