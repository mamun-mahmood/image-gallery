// ImageGallery.js

import { FC, useState } from "react";
import ImageCard from "./ImageCard";
import { ImageGalleryProps } from "../utils/types";

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [galleryOrder, setGalleryOrder] = useState([
    ...images.map((image) => image.id),
  ]);
  const deleteSelectedImages = () => {
    // Implement the logic to delete selected images from the gallery
  };
  return (
    <div className="image-gallery">
      {galleryOrder.map((imageId) => (
        <div className="image-card-wrapper" key={imageId} draggable>
          <ImageCard image={images[imageId - 1]} />
        </div>
      ))}
      <button onClick={deleteSelectedImages}>Delete Selected</button>
    </div>
  );
};

export default ImageGallery;
