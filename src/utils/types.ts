export interface NavbarProps {}
export interface ImageGalleryProps {}
export interface Image {
  id: string;
  url: string;
  alt: string;
  isSelected: boolean;
}
export interface ImageCardProps {
  image: Image;
}
