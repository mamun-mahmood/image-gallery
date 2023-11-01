import "./App.css";
import ImageGallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  const images = [
    {
      id: "1",
      url: "/images/image-1.webp",
      alt: "Image 1",
      isDeleted: false,
    },
    {
      id: "2",
      url: "/images/image-2.webp",
      alt: "Image 2",
      isDeleted: false,
    },
    {
      id: "3",
      url: "/images/image-3.webp",
      alt: "Image 3",
      isDeleted: false,
    },
    {
      id: "4",
      url: "/images/image-4.webp",
      alt: "Image 4",
      isDeleted: false,
    },
    {
      id: "5",
      url: "/images/image-5.webp",
      alt: "Image 5",
      isDeleted: false,
    },
    {
      id: "6",
      url: "/images/image-6.webp",
      alt: "Image 6",
      isDeleted: false,
    },
    {
      id: "7",
      url: "/images/image-7.webp",
      alt: "Image 7",
      isDeleted: false,
    },
    {
      id: "8",
      url: "/images/image-8.webp",
      alt: "Image 8",
      isDeleted: false,
    },
    {
      id: "9",
      url: "/images/image-9.webp",
      alt: "Image 9",
      isDeleted: false,
    },
    {
      id: "10",
      url: "/images/image-10.jpeg",
      alt: "Image 10",
      isDeleted: false,
    },
    {
      id: "11",
      url: "/images/image-11.jpeg",
      alt: "Image 11",
      isDeleted: false,
    },
  ];
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ImageGallery images={images} />
      </main>
    </>
  );
}

export default App;
