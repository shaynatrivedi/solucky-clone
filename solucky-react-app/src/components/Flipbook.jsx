import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

const MagazineFlipbook = () => {
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

  return (
    <div className="flipbook-wrapper">
      <HTMLFlipBook
        width={550}
        height={700}
        size="stretch"
        minWidth={315}
        maxWidth={1200}
        minHeight={400}
        maxHeight={1000}
        showCover={true}
        mobileScrollSupport={true}
        className="flipbook"
      >
        {pages.map((src, i) => (
          <div key={i} className="page">
            <img src={src} alt={`page-${i}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default MagazineFlipbook;
