import "./HeroVideo.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideo = () => {
  const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <img
          src="https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2018/09/Blog_-6-Fashion-Brands-Using-Video-Marketing-Effectively.jpg"
          alt="Fallback"
          style={{ width: "100%"}}
        />
        {/* <ReactPlayer
          // url={`${process.env.PUBLIC_URL}/assets/videos/video-3.mp4`}
          url="https://res.cloudinary.com/darwtgzlk/video/upload/v1687841755/Ecommerce-app/video-3_bvxghi.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        /> */}
      </div>

      <div className="hero-text">
        <h1>Elevate Your Style</h1>
        <h2>Discover the Pinnacle of Fashion Excellence</h2>
      </div>

      <button
        onClick={() => Navigate("product-listing")}
        className="shop-now-btn"
      >
        Shop Now
      </button>
    </div>
  );
};
