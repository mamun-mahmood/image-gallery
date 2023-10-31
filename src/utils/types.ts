export interface ImageGalleryProps {
  images: Image[];
}
export interface Image {
  id: number;
  url: string;
  alt: string;
  isFeatured: boolean;
  isDeleted: boolean;
}
export interface ImageCardProps {
  image: Image;
}
