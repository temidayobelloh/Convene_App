import React, { useState } from 'react';
import './meet-up-comments.css';

const CommentModal = ({ isOpen, onClose, comments, onCommentSubmit, onDeleteComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      onCommentSubmit(commentText);
      setCommentText(''); // Clear the input field after submitting
    }
  };

  return (
    <div className={`comment-modal ${isOpen ? 'open' : ''}`}>
      <div className="comment-modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2>Add Comment</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Enter your comment"
            required
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
            <button onClick={() => onDeleteComment(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentModal;
