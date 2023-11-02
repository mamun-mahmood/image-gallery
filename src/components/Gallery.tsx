import { FC, Suspense, lazy, useRef, useState } from "react";
import { ImageGalleryProps } from "../utils/types";
const ImageCard = lazy(() => import("./ImageCard"));

const ImageGallery: FC<ImageGalleryProps> = ({ allImages, setAllImages }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [draggingImageId, setDraggingImageId] = useState<string>("");
  return (
    <div className="image-gallery" ref={galleryRef}>
      {allImages.map((image) => (
        <Suspense
          key={image.id}
          // fallback={<div className="image-card">Loading...</div>}
        >
          <ImageCard
            image={image}
            allImages={allImages}
            galleryRef={galleryRef}
            setAllImages={setAllImages}
            draggingImageId={draggingImageId}
            setDraggingImageId={setDraggingImageId}
          />
        </Suspense>
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
