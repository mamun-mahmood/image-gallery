import { FC } from "react";
import { ImageCardProps } from "../utils/types";

const ImageCard: FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="image-card">
      <img draggable="false" src={image.url} alt={image.alt} />
    </div>
  );
};

export default ImageCard;
