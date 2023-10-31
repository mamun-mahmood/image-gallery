import "./App.css";
import ImageGallery from "./components/Gallery";

function App() {
  const images = [
    {
      id: 1,
      url: "/images/image-1.webp",
      alt: "Image 1",
      isFeatured: true,
      isDeleted: false,
    },
    {
      id: 2,
      url: "/images/image-2.webp",
      alt: "Image 2",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 3,
      url: "/images/image-3.webp",
      alt: "Image 3",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 4,
      url: "/images/image-4.webp",
      alt: "Image 4",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 5,
      url: "/images/image-5.webp",
      alt: "Image 5",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 6,
      url: "/images/image-6.webp",
      alt: "Image 6",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 7,
      url: "/images/image-7.webp",
      alt: "Image 7",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 8,
      url: "/images/image-8.webp",
      alt: "Image 8",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 9,
      url: "/images/image-9.webp",
      alt: "Image 9",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 10,
      url: "/images/image-10.jpeg",
      alt: "Image 10",
      isFeatured: false,
      isDeleted: false,
    },
    {
      id: 11,
      url: "/images/image-11.jpeg",
      alt: "Image 11",
      isFeatured: false,
      isDeleted: false,
    },
  ];
  const featuredFirst = images.sort((a, b) => {
    if (a.isFeatured) return -1;
    if (b.isFeatured) return 1;
    return 0;
  });
  return (
    <>
      <ImageGallery images={featuredFirst} />
    </>
  );
}

export default App;
