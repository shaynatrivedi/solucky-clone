import React from "react";
import FlipPage from "react-flip-page";
import "./Flipbook.css";

const pages = [
  "/Assets/Flipbook/cover1.png",
  "/Assets/Flipbook/cover2.png",
  "/Assets/Flipbook/cover3.png",
  "/Assets/Flipbook/cover4.png",
  "/Assets/Flipbook/cover5.png",
  "/Assets/Flipbook/cover6.png",
  "/Assets/Flipbook/cover7.png",
  "/Assets/Flipbook/cover8.png",
  "/Assets/Flipbook/cover9.png",
  "/Assets/Flipbook/cover10.png",
];

const Flipbook = () => {
  return (
    <div className="flipbook-wrapper">
      <FlipPage
        orientation="horizontal"
        uncutPages
        showHint
        animationDuration="800"
        responsive
        
      >
        {pages.map((src, i) => (
          <article key={i} className="page">
            <img src={src} alt={`page-${i}`} />
          </article>
        ))}
      </FlipPage>
    </div>
  );
};

export default Flipbook;
