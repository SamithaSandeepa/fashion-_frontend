import React, {useEffect,useState} from 'react';
import './ProductReview.css'; // Make sure to create a corresponding CSS file
import { useParams, useNavigate } from 'react-router-dom';

export const ProductReview = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 
  const navigate = useNavigate();
  console.log(id);
    // Function to navigate to the respective review page
    const goToReviewPage = (reviewType, productId) => {
      navigate(`/reviews/${reviewType}/${productId}`);
  };

    useEffect(() => {
      // Function to fetch product details from the API
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/store/products/${id}/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProduct(data);
          console.log(data);
        } catch (error) {
          console.error('There was a problem fetching the product details:', error);
        }
      }; 
      fetchProductDetails();
  }, [id]);
  if (!product) {
    return <div>Loading...</div>; // Placeholder for loading state
  }
  

  return (
    <div className="product-review">
      <div className="product-image">
        <img src={product.img_url} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <span className="rating">{product.rating} ★★★★</span>(reviews)
        <p className="price">$ {product.discounted_price} </p>
        <p><strong>Description :</strong> {product.description}</p>
        <p><strong>Type:</strong> {product.cloth_type}</p>
        <p><strong>Gender:</strong> {product.gender}</p>
        {/* <p><strong>Size:</strong> {product.size}</p> */}
        <div className="review-analysis">
          <h3>    Review Analysis    </h3>
          <button onClick={() => goToReviewPage('positive', product.id)}>Positive Reviews</button>
          <button onClick={() => goToReviewPage('negative', product.id)}>Negative Reviews</button>
          <button onClick={() => goToReviewPage('slightly-positive', product.id)}>Slightly Positive Reviews</button>
          <button onClick={() => goToReviewPage('slightly-negative', product.id)}>Slightly Negative Reviews</button>
          <button onClick={() => goToReviewPage('neutral', product.id)}>Neutral Reviews</button>
        </div>
      </div>
    </div>
  );
};


