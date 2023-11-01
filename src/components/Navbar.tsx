import { FC } from "react";
import { NavbarProps } from "../utils/types";

const Navbar: FC<NavbarProps> = ({ allImages, setAllImages }) => {
  const selectedImagesLength =
    allImages.filter((image) => image.isSelected).length || false;
  const handleDeleteImages = () => {
    const newImages = allImages.filter((image) => !image.isSelected);
    setAllImages(newImages);
  };
  return (
    <nav>
      {selectedImagesLength ? (
        <h1>
          {selectedImagesLength} {selectedImagesLength > 1 ? "Files" : "File"}{" "}
          Selected
        </h1>
      ) : (
        <h1>Image Gallery</h1>
      )}
      {selectedImagesLength && (
        <button onClick={handleDeleteImages}>Delete files</button>
      )}
    </nav>
  );
};

export default Navbar;
