import React from "react";
import HTMLFlipBook from 'react-pageflip'
import "./Flipbook.css";

const pages = [

];

const Flipbook = () => {
  return (
    <HTMLFlipBook 
    width={600} 
    height={1000}
    maxShadowOpacity={0.5}
    drawShadow={true}
    showCover={true}
    >
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
};

export default Flipbook;
