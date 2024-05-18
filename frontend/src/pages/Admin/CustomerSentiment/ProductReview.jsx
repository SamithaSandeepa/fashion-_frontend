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
  


  // You would fetch or pass the actual product data as props or from your state management in a real app
  // const product = {
  //   id: 'WD100B',
  //   name: 'Sleeveless Racer Muscle Back Maxi Dress',
  //   price: '4500 LKR',
  //   description: 'Material is very soft, smooth, comfortable, and breathable. This dress is perfect for summer and can be worn in autumn and spring. This maxi style is plain, has scoop neckline and is plain racerback.',
  //   rating: 4.5,
  //   type: 'Casual',
  //   gender: 'Women',
  //   size: 'Medium',
  //   imageUrl: '../images/test.png' // Replace with the actual image path
  // };

  return (
    <div className="product-review" style={{display:'flex' , alignItems:'center'}}>
      <div className="product-image ">
        <img src={product.img} alt={product.name} />
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
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
        <h3>Review Analysis</h3>
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


