import Image from "next/image";
import React, { useState } from "react";

interface ImageInfo {
  src: string;
  alt: string;
  link: string;
  name: string;
  description: string;
}

const images: ImageInfo[] = [
  {
    src: "/VoleyCostaRica.jpeg",
    alt: "FecovolCR",
    link: "https://fecovolcr.com/",
    name: "Federación Costarricense de Voleibol",
    description: "Promoviendo el voleibol en Costa Rica.",
  },
  {
    src: "/BasketCostaRica.jpeg",
    alt: "FECOBA",
    link: "https://www.fecobacr.com/",
    name: "FECOBA",
    description:
      "Organización deportiva sin fines de lucro, que desarrolla y organiza con apoyo de estatutos y reglamentos el baloncesto en todas sus categorías a nivel nacional.",
  },
  {
    src: "/TenisMesaCostaRica.png",
    alt: "Fecoteme",
    link: "https://fecoteme.com/",
    name: "Fecoteme",
    description: "Federación Costarricense de Tenis de Mesa",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <Image
              width={500}
              height={200}
              src={image.src}
              alt={image.alt}
              className="block w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl font-bold">{image.name}</h2>
              <p className="text-center text-lg w-2/3">{image.description}</p>
              <a
                href={image.link}
                className="mt-4 bg-blue-600 px-4 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                Más Información
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
