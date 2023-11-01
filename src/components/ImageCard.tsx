import { ImageCardProps } from "../utils/types";
import { FC, useRef } from "react";
const ImageCard: FC<ImageCardProps> = ({
  image: { id, url, alt, isSelected },
  allImages,
  setAllImages,
  draggingImageId,
  setDraggingImageId,
}) => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const handleDragStart = (id: string) => {
    const imageCard = imageCardRef.current;
    imageCard?.classList.add("dragging");
    setDraggingImageId(id);
  };
  const handleDragOver = (dragginOverImageId: string) => {
    if (draggingImageId !== dragginOverImageId) {
      const draggingImage = allImages.find(
        (image) => image.id === draggingImageId
      );
      const draggingOverImage = allImages.find(
        (image) => image.id === dragginOverImageId
      );
      const draggingImageIndex = allImages.indexOf(draggingImage!);
      const draggingOverImageIndex = allImages.indexOf(draggingOverImage!);
      const newImages = [...allImages];
      newImages.splice(draggingImageIndex, 1);
      newImages.splice(draggingOverImageIndex, 0, draggingImage!);
      setAllImages(newImages);
    }
  };
  const handleDragEnd = () => {
    const imageCard = imageCardRef.current;
    imageCard?.classList.remove("dragging");
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
      onDragOver={() => handleDragOver(id)}
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
