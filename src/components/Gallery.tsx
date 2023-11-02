import { FC, useRef, useState } from "react";
import { ImageGalleryProps } from "../utils/types";
import ImageCard from "./ImageCard";

const ImageGallery: FC<ImageGalleryProps> = ({ allImages, setAllImages }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [draggingImageId, setDraggingImageId] = useState<string>("");

  return (
    <div className="image-gallery" ref={galleryRef}>
      {allImages.map((image) => (
        <ImageCard
          key={image.id}
          galleryRef={galleryRef}
          image={image}
          allImages={allImages}
          setAllImages={setAllImages}
          draggingImageId={draggingImageId}
          setDraggingImageId={setDraggingImageId}
        />
      ))}
      <div className="add-image">
        <img
          draggable="false"
          width={"40px"}
          height={"40px"}
          src="/images/image-icon.png"
          alt="Image Icon"
        />
        <h4>Add Images</h4>
      </div>
    </div>
  );
};

export default ImageGallery;
