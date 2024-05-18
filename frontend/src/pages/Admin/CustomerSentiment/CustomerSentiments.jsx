import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Make sure to import the Modal component correctly
import './CustomerSentiments.css'; 
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const CustomerSentiment = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sentimentData, setSentimentData] = useState({});


  const [products, setProducts] = useState([]);
  console.log(products);

    // Function to process sentiment analysis results
const processSentimentResults = (results) => {
  // Initialize an object to hold sentiment counts
  const sentimentCounts = {
      'Slightly Negative': 0,
      'Negative': 0,
      'Neutral': 0,
      'Positive': 0,
      'Slightly Positive': 0
  };

  // Loop over each result and increment the corresponding sentiment count
  results.forEach(result => {
      // Determine the sentiment category and increment its count
      switch (result.predicted_sentiment) {
          case 'slightly-negative':
              sentimentCounts['Slightly Negative']++;
              break;
          case 'negative':
              sentimentCounts['Negative']++;
              break;
          case 'neutral':
              sentimentCounts['Neutral']++;
              break;
          case 'positive':
              sentimentCounts['Positive']++;
              break;
          case 'slightly-positive':
              sentimentCounts['Slightly Positive']++;
              break;
          default:
              break;
      }
  });

  // Update the chart data state
  setSentimentData({
      labels: Object.keys(sentimentCounts),
      datasets: [{
          label: 'Sentiment Count',
          data: Object.values(sentimentCounts),
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
          ],
          borderWidth: 1
      }]
  });
};

    // Modify the openModal function to accept product_id as a parameter
const openModal = (productId) => {
  fetchSentimentData(productId); // Pass product_id to fetchSentimentData
};

// Modify fetchSentimentData to accept productId parameter and format comments accordingly
const fetchSentimentData = async (productId) => {
  try {
      // Find the product by its id
      const product = products.find(product => product.product_id === productId);

      // Check if the product exists and has comments
      if (product && product.comment) {
          // Arrange comments in the desired structure
          const clickedProductComments = { comment: product.comment.flat()};

          // Send a POST request to the sentiment analysis API
          const response = await fetch('http://localhost:8000/api/sent/sentiment_analysis', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(clickedProductComments)
          });

          // Handle response from the API
          const data = await response.json();
          processSentimentResults(data.results);
          console.log("data", data.results);
          setIsModalOpen(true); // Open the modal after data is processed
      } else {
          console.log("Product or comments not found.");
      }
  } catch (error) {
      console.error('Error fetching sentiment data: ', error);
  }
};


  
    
  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/comments/com/');
        console.log("response", response)
        const data = await response.json();
        setProducts(data);
        console.log("data", data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); 



const closeModal = () => {
    setIsModalOpen(false);
};

  return (
    <div className="customer-sentiments">
      <h2>Customer Sentiments</h2>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            {/* <th>Category</th> */}
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
             
              <td>
                <button onClick={openModal}>Analysis</button>
                <button onClick={() => navigate(`/product-review/${product.id}`)}>Review</button>
              </td>
            </tr>
          ))} */}
           {products.map((product, index) => (
            console.log("product", product),
          <tr key={index}> {/* Alternatively, if product objects had unique ids, you could use product.id */}
            <td>{product.product_id[0]}</td>
            <td>{product.product_id[1]}</td>
            {/* <td>
            <button onClick={() => openModal(product.product_id)}>Analysis</button>
              <button onClick={() => navigate(`/product-review/${product.product_id}`)}>Review</button>
            </td> */}
            <td className="text-center">
            <button onClick={() => openModal(product.product_id)} className="analysis-button">
              <img src={require('./images/Analysis.png')} alt="Analysis" />
            </button>
              <button onClick={() => navigate(`/product-review/${product.product_id[0]}`)} className="review-button">
                <img src={require('./images/review.png')} alt="Review" />
              </button>
            </td>

          </tr>
        ))}
        </tbody>
      </table>

      {/* Modal for Analysis */}
      <Modal show={isModalOpen} onClose={closeModal}>
                <Bar data={sentimentData} options={{ scales: { y: { beginAtZero: true } } }} />
            </Modal>
    </div>
  );
};


