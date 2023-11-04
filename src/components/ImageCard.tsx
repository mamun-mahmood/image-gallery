import { AppContext } from "../App";
import { Image, ImageCardProps } from "../utils/types";
import { FC, useContext, useRef } from "react";

const ImageCard: FC<ImageCardProps> = ({
  image: { id, url, alt, isSelected },
}) => {
  const { allImages, setAllImages } = useContext(AppContext);

  const imageCardRef = useRef<any>(null);
  const handleCheckboxChange = (id: string) => {
    const newImages = allImages.map((image: Image) => {
      if (image.id === id) {
        return { ...image, isSelected: !image.isSelected };
      }
      return image;
    });
    setAllImages(newImages);
  };

  return (
    <div ref={imageCardRef} className="image-card">
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
