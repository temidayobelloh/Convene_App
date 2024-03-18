import { useState } from 'react';
import CommentModal from '../MeetUpComments/meet-up-comments';
import './meet-up-page.css';

const MeetupPage = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Do you think AI will replace human jobs in the future?', votes: 10, comments: [] },
    { id: 2, text: 'Should AI be granted autonomous decision-making capabilities, even if it means potentially sacrificing human oversight?', votes: 5, comments: [] }
  ]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);

  const handleUpvote = (id) => {
    setQuestions(questions.map(question => {
      if (question.id === id) {
        return { ...question, votes: question.votes + 1 };
      }
      return question;
    }));
  };

  const handleDownvote = (id) => {
    setQuestions(questions.map(question => {
      if (question.id === id && question.votes > 0) {
        return { ...question, votes: question.votes - 1 };
      }
      return question;
    }));
  };

  const handleNewQuestionSubmit = (e) => {
    e.preventDefault();
    if (newQuestionText.trim() !== '') {
      const newQuestion = {
        id: questions.length + 1,
        text: newQuestionText,
        votes: 0,
        comments: []
      };
      setQuestions([...questions, newQuestion]);
      setNewQuestionText(''); // Clear the input field after submitting
    }
  };

  const handleCommentModalOpen = (id) => {
    setCommentModalOpen(true);
    setSelectedQuestionId(id);
  };

  const handleCommentModalClose = () => {
    setCommentModalOpen(false);
    setSelectedQuestionId(null);
    setSelectedCommentIndex(null);
  };

  const handleNewCommentSubmit = (commentText) => {
    const updatedQuestions = questions.map(question => {
      if (question.id === selectedQuestionId) {
        return {
          ...question,
          comments: [...question.comments, commentText]
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    handleCommentModalClose();
  };

  const handleDeleteComment = (index) => {
    const updatedQuestions = questions.map(question => {
      if (question.id === selectedQuestionId) {
        return {
          ...question,
          comments: question.comments.filter((comment, i) => i !== index)
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className="meetup-card">
      <h2>Meetup Name: AI and the future of mankind</h2>
      <p>Date: April 1st, 2024.</p>
      <p>Location: Techsterville, Mars.</p>
      <img alt='meet_up_location'/>
      <h3>Questions</h3>
      {questions.map((question, index) => (
        <div className="question-card" key={question.id}>
          <p>{`${index + 1}. ${question.text}`}</p>
          <p>Votes: {question.votes}</p>
          <p>Comments: {question.comments.length}</p>
          {/* Render comments */}
          {question.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
              <button onClick={() => handleDeleteComment(index)}>Delete</button>
            </div>
          ))}
          <button onClick={() => handleUpvote(question.id)}>Upvote</button>
          <button onClick={() => handleDownvote(question.id)}>Downvote</button>
          <button onClick={() => handleCommentModalOpen(question.id)}>Comment</button>
        </div>
      ))}
      <form onSubmit={handleNewQuestionSubmit}>
        <textarea
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
          placeholder="Enter your question"
          required
        ></textarea>
        <button type="submit" className="post-question-button">
          Post a New Question
        </button>
      </form>

      {/* Comment Modal */}
      <CommentModal
        isOpen={commentModalOpen}
        onClose={handleCommentModalClose}
        comments={questions.find(question => question.id === selectedQuestionId)?.comments || []}
        onCommentSubmit={handleNewCommentSubmit}
        onDeleteComment={handleDeleteComment}
      />
    </div>
  );
};

export default MeetupPage;