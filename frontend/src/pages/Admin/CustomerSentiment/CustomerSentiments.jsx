import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Make sure to import the Modal component correctly
import './CustomerSentiments.css'; 
import { useNavigate } from 'react-router-dom';


export const CustomerSentiment = () => {
    const navigate = useNavigate();
    // ... rest of your state and variables

    // const goToReviewPage = () => {
    //     // Redirect to the ProductReviewPage, you may want to pass the product ID in the path or state
    //     navigate('/review-page');
    // };
   
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const products = [
    { id: 'WD100B', category: 'Women’s Dress', name: 'Sleeveless Racer Muscle Back Maxi Dress' },
    { id: 'MT100B', category: 'Men’s T shirt', name: 'Men’s Slim-Fit Long-Sleeve T-Shirt' },
    // ... other products
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

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
            <th>Category</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>
                <button onClick={openModal}>Analysis</button>
                <button onClick={() => navigate(`/product-review/${product.id}`)}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Analysis */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <p>Here you can render the analysis data...</p>
      </Modal>
    </div>
  );
};


