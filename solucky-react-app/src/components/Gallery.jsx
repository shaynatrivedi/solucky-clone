import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery({
  title,
  date,
  description,
  images,
  onClose,
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  // helper to wrap around
  const prevSlide = () => setIndex((i) => (i - 1 + total) % total);
  const nextSlide = () => setIndex((i) => (i + 1) % total);

  // pick the next three indices
  const thumbs = [1, 2, 3].map((off) => (index + off) % total);

  return (
    <div className="gallery-overlay">
      <div className="gallery-container">
        {/* close button */}
        <button className="gallery-close" onClick={onClose}>
          ✕
        </button>

        {/* left sidebar */}
        <div className="gallery-sidebar">
          <button className="thumb-nav" onClick={prevSlide}>
            ↑
          </button>
          {thumbs.map((ti) => (
            <img
              key={ti}
              className="gallery-thumb"
              src={images[ti]}
              alt={`thumb ${ti + 1}`}
              onClick={() => setIndex(ti)}
            />
          ))}
          <button className="thumb-nav" onClick={nextSlide}>
            ↓
          </button>
        </div>

        {/* main panel */}
        <div className="gallery-main">
          <div className="gallery-header">
            <div className="gallery-title">{title}</div>
            <div className="gallery-date">{date}</div>
            {description && (
              <p className="gallery-description">{description}</p>
             )}
          </div>

          <div className="gallery-content">
            <button className="gallery-nav prev" onClick={prevSlide}>
              ‹
            </button>
            <img
              className="gallery-image"
              src={images[index]}
              alt={`slide ${index + 1}`}
            />
            <button className="gallery-nav next" onClick={nextSlide}>
              ›
            </button>
          </div>

          <div className="gallery-counter">
            {index + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
