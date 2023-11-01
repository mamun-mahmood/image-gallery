export interface ImageGalleryProps {
  images: Image[];
}
export interface Image {
  id: string;
  url: string;
  alt: string;
  isFeatured: boolean;
  isDeleted: boolean;
}
export interface ImageCardProps {
  image: Image;
  galleryRef: React.RefObject<HTMLDivElement>;
  allImages: Image[];
  setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
  draggingImageId: string;
  setDraggingImageId: React.Dispatch<React.SetStateAction<string>>;
}
