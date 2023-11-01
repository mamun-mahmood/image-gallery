import { FC } from "react";
import { NavbarProps } from "../utils/types";

const Navbar: FC<NavbarProps> = ({ selectedImages }) => {
  const selectedImagesLength = selectedImages.filter(
    (image) => image.isSelected
  ).length;
  return (
    <nav>
      {selectedImagesLength ? (
        <h1>
          {selectedImagesLength} Selected{" "}
          {selectedImagesLength > 1 ? "Images" : "Image"}
        </h1>
      ) : (
        <h1>Image Gallery</h1>
      )}
      <div>
        <button>Delete files</button>
      </div>
    </nav>
  );
};

export default Navbar;
