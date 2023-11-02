import { ImageCardProps } from "../utils/types";
import React, { FC, useRef } from "react";
const ImageCard: FC<ImageCardProps> = ({
  image: { id, url, alt, isSelected },
  allImages,
  setAllImages,
  draggingImageId,
  setDraggingImageId,
}) => {
  const imageCardRef = useRef<any>(null);
  const handleDragStart = (id: string) => {
    const imageCard = imageCardRef.current;
    imageCard?.classList.add("dragging");
    setDraggingImageId(id);
  };
  const handleDragOver = (
    _e: React.DragEvent<HTMLDivElement>,
    draggingOverImageId: string
  ) => {
    if (draggingImageId !== draggingOverImageId) {
      const draggingImageIndex = allImages.findIndex(
        (image) => image.id === draggingImageId
      );
      const draggingOverImageIndex = allImages.findIndex(
        (image) => image.id === draggingOverImageId
      );

      const draggingImage = allImages.find(
        (image) => image.id === draggingImageId
      );
      const newImages = [...allImages];

      newImages.splice(draggingImageIndex, 1);
      newImages.splice(draggingOverImageIndex, 0, draggingImage!);
      setAllImages(newImages);
    }
  };
  const handleDragEnd = () => {
    const imageCard = imageCardRef.current;
    setTimeout(() => {
      imageCard?.classList.remove("dragging");
    }, 100);
  };
  const handleCheckboxChange = (id: string) => {
    const newImages = allImages.map((image) => {
      if (image.id === id) {
        return { ...image, isSelected: !image.isSelected };
      }
      return image;
    });
    setAllImages(newImages);
  };

  return (
    <div
      ref={imageCardRef}
      className="image-card"
      draggable
      onDragStart={() => handleDragStart(id)}
      onDragOver={(e) => handleDragOver(e, id)}
      onDragEnd={handleDragEnd}
    >
      <img draggable="false" src={url} alt={alt} />
      <input
        className={`${isSelected ? "" : "hidden"}`}
        type="checkbox"
        defaultChecked={isSelected}
        onChange={() => handleCheckboxChange(id)}
      />
    </div>
  );
};

export default ImageCard;
