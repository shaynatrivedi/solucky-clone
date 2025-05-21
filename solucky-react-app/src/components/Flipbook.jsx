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
    size='fixed'
    >
      <div className="page-template cover">1</div>
      <div className="page-template page1">2</div>
      <div className="page-template page2">3</div>
      <div className="page-template page3">45</div>
      <div className="page-template page4"></div>
      <div className="page-template page5"></div>
      <div className="page-template page6"></div>
      <div className="page-template page7"></div>
      <div className="page-template page8"></div>
      <div className="page-template page9"></div>
    </HTMLFlipBook>
  );
};

export default Flipbook;
