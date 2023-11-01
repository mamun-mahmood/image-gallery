export interface NavbarProps {
  allImages: Image[];
  setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

export interface ImageGalleryProps {
  allImages: Image[];
  setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
}
export interface Image {
  id: string;
  url: string;
  alt: string;
  isDeleted: boolean;
  isSelected: boolean;
}
export interface ImageCardProps {
  image: Image;
  galleryRef: React.RefObject<HTMLDivElement>;
  allImages: Image[];
  setAllImages: React.Dispatch<React.SetStateAction<Image[]>>;
  draggingImageId: string;
  setDraggingImageId: React.Dispatch<React.SetStateAction<string>>;
}
