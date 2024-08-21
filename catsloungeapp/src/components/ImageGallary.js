import React, { useEffect, useState } from 'react';
import ImageItem from './ImageItem';
import './ImageGallery.css';
import { getCatImages } from '../utils/api';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getCatImages().then(setImages);
  }, []);

  return (
    <div className="image-gallery">
      {images.map(image => <ImageItem key={image.id} image={image} />)}
    </div>
  );
}

export default ImageGallery;
