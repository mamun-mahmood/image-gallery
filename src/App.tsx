import { useState } from "react";
import "./App.css";
import ImageGallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  const images = [
    {
      id: "1",
      url: "/images/image-1.webp",
      alt: "Image 1",
    },
    {
      id: "2",
      url: "/images/image-2.webp",
      alt: "Image 2",
    },
    {
      id: "3",
      url: "/images/image-3.webp",
      alt: "Image 3",
    },
    {
      id: "4",
      url: "/images/image-4.webp",
      alt: "Image 4",
    },
    {
      id: "5",
      url: "/images/image-5.webp",
      alt: "Image 5",
    },
    {
      id: "6",
      url: "/images/image-6.webp",
      alt: "Image 6",
    },
    {
      id: "7",
      url: "/images/image-7.webp",
      alt: "Image 7",
    },
    {
      id: "8",
      url: "/images/image-8.webp",
      alt: "Image 8",
    },
    {
      id: "9",
      url: "/images/image-9.webp",
      alt: "Image 9",
    },
    {
      id: "10",
      url: "/images/image-10.jpeg",
      alt: "Image 10",
    },
    {
      id: "11",
      url: "/images/image-11.jpeg",
      alt: "Image 11",
    },
  ];
  // add isDeleted and isSelected properties to each image
  const imageData = images.map((image) => {
    return { ...image, isDeleted: false, isSelected: false };
  });
  // set allImages to imageData
  const [allImages, setAllImages] = useState(imageData);
  return (
    <>
      <header>
        <Navbar allImages={allImages} setAllImages={setAllImages} />
      </header>
      <main>
        <ImageGallery allImages={allImages} setAllImages={setAllImages} />
      </main>
    </>
  );
}

export default App;
