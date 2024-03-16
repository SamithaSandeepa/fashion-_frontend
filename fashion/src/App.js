import React, { useState } from "react";

function ImageUploadAndDetect() {
  const [imageSrc, setImageSrc] = useState("");
  const [boundingBox, setBoundingBox] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    show: false,
  });

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
        // Assuming the first bounding box is the one we want to display
        const [x1, y1, x2, y2] = data.boxes[0];
        setBoundingBox({ x1, y1, x2, y2, show: true });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" id="imageInput" name="image" accept="image/*" />
        <button type="submit">Upload and Detect</button>
      </form>

      <div className="image-container">
        {imageSrc && <img id="image" src={imageSrc} alt="Uploaded" />}
        {boundingBox.show && (
          <div
            className="bounding-box"
            style={{
              left: boundingBox.x1,
              top: boundingBox.y1,
              width: boundingBox.x2 - boundingBox.x1,
              height: boundingBox.y2 - boundingBox.y1,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageUploadAndDetect;
