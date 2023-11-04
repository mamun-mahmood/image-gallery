import { Suspense, lazy, useContext, useEffect, useRef } from "react";
import { Image } from "../utils/types";
import Sortable from "sortablejs";
import { AppContext } from "../App";

const ImageCard = lazy(() => import("./ImageCard"));
const ImageGallery = () => {
  const { allImages } = useContext(AppContext);

  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sortable = Sortable.create(galleryRef.current!, {
      animation: 300,
    });
    return () => sortable.destroy();
  }, []);
  return (
    <div className="image-gallery" ref={galleryRef}>
      {allImages.map((image: Image) => (
        <Suspense
          key={image.id}
          fallback={<div className="image-card">Loading...</div>}
        >
          <ImageCard image={image} />
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
