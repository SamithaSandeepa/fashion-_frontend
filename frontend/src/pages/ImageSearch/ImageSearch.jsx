import React, { useState, useEffect, useRef } from "react";

function ImageSearch() {
  const [imageSrc, setImageSrc] = useState("");
  const [boundingBox, setBoundingBox] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width: 0,
    height: 0,
    show: false,
  });
  const [detectedImages, setDetectedImages] = useState([]);
  const imageRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          "http://localhost:8000/api/search/detect",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log("Data:", data);

        setImageSrc(URL.createObjectURL(file));

        if (data.boxes && data.boxes.length > 0) {
          const [x1, y1, x2, y2] = data.boxes[0];
          setBoundingBox({
            x1,
            y1,
            x2,
            y2,
            width: x2 - x1,
            height: y2 - y1,
            show: true,
          });
        }

        if (data.cropped_images_paths && data.cropped_images_paths.length > 0) {
          setDetectedImages(
            data.cropped_images_paths.map((path, index) => ({
              url: `http://localhost:8000/static/detected_images/${path
                .split("\\")
                .pop()}`,
              label: data.class_labels[index],
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    if (boundingBox.show && imageRef.current) {
      const img = imageRef.current;
      const scaleWidth = img.width / img.naturalWidth;
      const scaleHeight = img.height / img.naturalHeight;

      // Update boundingBox with scaled dimensions using the previous state
      setBoundingBox((prev) => ({
        ...prev,
        x1: prev.x1 * scaleWidth,
        y1: prev.y1 * scaleHeight,
        width: prev.width * scaleWidth,
        height: prev.height * scaleHeight,
        show: true,
      }));
    }
  }, [imageSrc]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" id="imageInput" name="image" accept="image/*" />
        <button type="submit">Upload and Detect</button>
      </form>

      <div className="image-container" style={{ position: "relative" }}>
        <img
          ref={imageRef}
          src={imageSrc}
          alt="Uploaded"
          onLoad={() => setBoundingBox((b) => ({ ...b, show: false }))}
        />
        {boundingBox.show && (
          <div
            className="bounding-box"
            style={{
              position: "absolute",
              left: `${boundingBox.x1}px`,
              top: `${boundingBox.y1}px`,
              width: `${boundingBox.width}px`,
              height: `${boundingBox.height}px`,
              border: "2px solid red",
            }}
          />
        )}
      </div>

      <div className="detected-images">
        {detectedImages.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Detected ${image.label}`} />
            <p>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearch;
