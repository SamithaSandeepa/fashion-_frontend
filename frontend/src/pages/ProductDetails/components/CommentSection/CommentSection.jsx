// import React, { useEffect, useState } from 'react';
// import './CommentSection.css';

// export const CommentSection = ({selectedProduct}) => {
//   const [comment, setComment] = useState('');
//   console.log(selectedProduct);

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };
//   const handleSubmit = (e) => {

//     e.preventDefault();
//     // Add your logic to handle the comment submission here
//     console.log(comment);
//     setComment('');
//   };

//   useEffect(() => {
//   console.log(selectedProduct);

//     }, [selectedProduct]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={comment}
//           onChange={handleCommentChange}
//           placeholder="Enter your comment"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import './CommentSection.css';
import Modal from '../../../Admin/CustomerSentiment/Modal';

export const CommentSection = ({ selectedProduct }) => {
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [sentimentResults, setSentimentResults] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const fetchSentimentAnalysis = async (newComment) => {
    try {
      const analysisResponse = await fetch('http://localhost:8000/api/sent/sentiment_analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: [newComment] }),
      });

      if (analysisResponse.ok) {
        const analysisData = await analysisResponse.json();
        setSentimentResults(analysisData.results);
      } else {
        console.error('Failed to analyze sentiment');
      }
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    
    try {
      const response = await fetch('http://localhost:8000/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: selectedProduct,
          comments: comment,
        }),
      });
      
      if (response.ok) {
        console.log('Comment submitted successfully!');
        fetchSentimentAnalysis(comment);
        setShowModal(true);
        setComment('');
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

