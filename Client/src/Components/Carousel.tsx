import { useEffect, useRef, useState } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap"; 

const images = [
  { src: "src/assets/slide1.jpg", alt: "Slide 1" },
  { src: "src/assets/slide2.jpg", alt: "Slide 2" },
  { src: "src/assets/slide3.jpg", alt: "Slide 3" }
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null); // Explicit typing for TypeScript
  const [slides,] = useState(images); // State for dynamic images

  useEffect(() => {
    if (!carouselRef.current) return; // Prevent errors if ref is null
    
    const bootstrapCarousel = new BootstrapCarousel(carouselRef.current, {
      interval: 3000, // Auto-slide every 3 seconds
      wrap: true, // Enable looping
    });

    return () => bootstrapCarousel.dispose(); // Cleanup on unmount
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" ref={carouselRef} data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner mt-5 mb-5">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={slide.src} className="d-block w-100 img-fluid" alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

