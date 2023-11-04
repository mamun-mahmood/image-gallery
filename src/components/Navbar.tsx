import { useContext } from "react";
import { Image } from "../utils/types";
import { AppContext } from "../App";

const Navbar = () => {
  const { allImages, setAllImages } = useContext(AppContext);
  // get the length of selected images
  const selectedImagesLength =
    allImages.filter((image: Image) => image.isSelected).length || false;
  // delete selected images
  const handleDeleteImages = () => {
    const newImages = allImages.filter((image: Image) => !image.isSelected);
    setAllImages(newImages);
  };
  // uncheck all images
  const handleCheckboxChange = () => {
    const newImages = allImages.map((image: Image) => {
      return { ...image, isSelected: false };
    });
    setAllImages(newImages);
  };

  return (
    <nav>
      {selectedImagesLength ? (
        <div className="selected-header">
          <input
            type="checkbox"
            defaultChecked={true}
            onChange={handleCheckboxChange}
          />
          <h1>
            {selectedImagesLength} {selectedImagesLength > 1 ? "Files" : "File"}{" "}
            Selected
          </h1>
        </div>
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
