import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductReview.css'; // Make sure you have this CSS file
import { useNavigate } from 'react-router-dom';
import './Reviewpage.css';

export const Reviewpage = () => {
  const { reviewType, id } = useParams();
  console.log(reviewType, id); // Log the reviewType and id to the console
  const [comments, setComments] = useState([]);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

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
        const productComments = allComments.find(item => item.product_id[0] === id)?.comment || [];
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


  const fetchAndAnalyzeComment = async (comment) => {
    // setLoading(true);
    try {
      // Step 2: Filter comments by product ID
      console.log(JSON.stringify({ comment: [comment] }));
      
      // Step 3: Send the filtered comments for sentiment analysis
      const response = await fetch(`http://localhost:8000/api/sent/sentiment_analysis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Ensure the body matches the API's expected format
        body: JSON.stringify({ comment:  [comment],explainable_ai: true }),
      });
      if (!response.ok) throw new Error('Failed to analyze comments');
      const analysisResults = await response.json();
      // setComments(filteredComments);
      setAnalysis(analysisResults.results[0].explanations);
      setShow(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // setLoading(false);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="review-page">
      <h1>Review Page</h1>
      <p>Product ID: {id}</p>
      {/* Iterate through comments and display them */}
      <ul>
        {comments.map((comment, index) => (
          <button key={index} onClick={()=>fetchAndAnalyzeComment(comment)}>{comment}</button>
        ))}
      </ul>
      {
        show && (
          <div className="modal-overlay" onClick={()=>setShow(false)}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Analysis Details</h4>
              <button onClick={()=>setShow(false)} className="close-button">&times;</button>
            </div>
            <div className="modal-body">
              <button onClick={()=>window.open('http://localhost:8000/media/'+analysis, '_blank')}>show Result</button>
            </div>
          </div>
        </div>
        )
      }
      
    </div>
  );
};
