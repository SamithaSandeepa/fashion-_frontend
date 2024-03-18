import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/sent/sentiment_analysis', {
        comment: comments,
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCommentChange = (event, index) => {
    const newComments = [...comments];
    newComments[index] = event.target.value;
    setComments(newComments);
  };

  const addCommentInput = () => {
    setComments([...comments, '']);
  };

  return (
    <div className="App">
      <h1>Sentiment Analysis</h1>
      <form onSubmit={handleSubmit}>
        {comments.map((comment, index) => (
          <input
            key={index}
            type="text"
            value={comment}
            onChange={(event) => handleCommentChange(event, index)}
          />
        ))}
        <button type="button" onClick={addCommentInput}>Add Comment</button>
        <button type="submit">Analyze Sentiment</button>
      </form>
      <div>
        <h2>Results</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.comment}: {result.predicted_sentiment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
