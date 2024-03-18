import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReview.css'; // Make sure you have this CSS file
import { useNavigate } from 'react-router-dom';

export const Reviewpage = () => {
  const { reviewType, id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndAnalyzeComments = async () => {
      setLoading(true);
      try {
        // Step 1: Fetch all comments
        let response = await fetch(`http://localhost:8000/api/comments/com/`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        let allComments = await response.json();
        console.log(allComments);
        
        // Step 2: Filter comments by product ID
        const productComments = allComments.find(item => item.product_id === id)?.comment || [];
        console.log(JSON.stringify({ comment: productComments }));
        
        // Step 3: Send the filtered comments for sentiment analysis
        response = await fetch(`http://localhost:8000/api/sent/sentiment_analysis`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Ensure the body matches the API's expected format
          body: JSON.stringify({ comment: productComments }),
        });
        if (!response.ok) throw new Error('Failed to analyze comments');
        const analysisResults = await response.json();
        console.log(analysisResults);
        
        // Step 4: Filter comments based on reviewType (predicted sentiment)
        let filteredComments;
        if (reviewType === 'all') {
          filteredComments = analysisResults.results.map(comment => comment.comment);
        } else {
          filteredComments = analysisResults.results
            .filter(comment => comment.predicted_sentiment === reviewType)
            .map(comment => comment.comment);
        }

        setComments(filteredComments);
      } catch (error) {
        console.error('Error:', error);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAndAnalyzeComments();
  }, [id, reviewType]); // Re-fetch when id or reviewType changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Review Page</h1>
      <p>Product ID: {id}</p>
      {/* Iterate through comments and display them */}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};
