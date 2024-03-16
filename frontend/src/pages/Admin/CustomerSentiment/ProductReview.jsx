import React from 'react';
import './ProductReview.css'; // Make sure to create a corresponding CSS file
import { useNavigate } from 'react-router-dom';

export const ProductReview = () => {
   
    // ... product data and other states
  const navigate = useNavigate();
  
    // Function to navigate to the respective review page
  const goToReviewPage = (reviewType) => {
      navigate(`/${reviewType}-reviews/${product.id}`);
    };


  // You would fetch or pass the actual product data as props or from your state management in a real app
  const product = {
    id: 'WD100B',
    name: 'Sleeveless Racer Muscle Back Maxi Dress',
    price: '4500 LKR',
    description: 'Material is very soft, smooth, comfortable, and breathable. This dress is perfect for summer and can be worn in autumn and spring. This maxi style is plain, has scoop neckline and is plain racerback.',
    rating: 4.5,
    type: 'Casual',
    gender: 'Women',
    size: 'Medium',
    imageUrl: '../images/test.png' // Replace with the actual image path
  };

  return (
    <div className="product-review">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <span className="rating">{product.rating} ★</span>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <p>Type: {product.type}</p>
        <p>Gender: {product.gender}</p>
        <p>Size: {product.size}</p>
      </div>
      <div className="review-analysis">
      <button onClick={() => goToReviewPage('positive')}>Positive Reviews</button>
        <button onClick={() => goToReviewPage('negative')}>Negative Reviews</button>
        <button onClick={() => goToReviewPage('slightly-positive')}>Slightly Positive Reviews</button>
        <button onClick={() => goToReviewPage('slightly-negative')}>Slightly Negative Reviews</button>
        <button onClick={() => goToReviewPage('neutral')}>Neutral Reviews</button>
      </div>
    </div>
  );
};


