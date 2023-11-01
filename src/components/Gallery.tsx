import { FC, useRef, useState } from "react";
import { ImageGalleryProps } from "../utils/types";
import ImageCard from "./ImageCard";

const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  selectedImages,
  setSelectedImages,
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  // const deleteSelectedImages = () => {};
  const [allImages, setAllImages] = useState(images);
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
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      ))}
      {/* <button onClick={deleteSelectedImages}>Delete Selected</button> */}
    </div>
  );
};

export default ImageGallery;
