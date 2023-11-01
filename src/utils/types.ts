export interface ImageGalleryProps {
  images: Image[];
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface Image {
  id: string;
  url: string;
  alt: string;
  isDeleted: boolean;
}
export interface ImageCardProps {
  image: Image;
  galleryRef: React.RefObject<HTMLDivElement>;
  allImages: Image[];
  setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
  draggingImageId: string;
  setDraggingImageId: React.Dispatch<React.SetStateAction<string>>;
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}
