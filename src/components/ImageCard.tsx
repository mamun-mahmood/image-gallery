import { ImageCardProps } from "../utils/types";
import { FC, useRef } from "react";
const ImageCard: FC<ImageCardProps> = ({
  image: { id, url, alt },
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
  const handleDragOver = (e: any, dragginOverImageId: string) => {
    // e.preventDefault();

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
    </div>
  );
};

export default ImageCard;
