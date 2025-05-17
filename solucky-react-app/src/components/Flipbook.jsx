import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

const MagazineFlipbook = () => {
  const pages = [
    "/Assets/Flipbook/cover.png",
    "/Assets/Flipbook/page1.png",
    "/Assets/Flipbook/page2.png",
    "/Assets/Flipbook/page3.png",
    "/Assets/Flipbook/back.png",
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
