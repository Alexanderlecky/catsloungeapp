import React from 'react';
import "../styles/ImageItem.css";

function ImageItem({ image }) {
  return (
    <div className="image-item">
      <img src={image.url} alt="Cute cat" />
    </div>
  );
}

export default ImageItem;
