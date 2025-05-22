import React from "react";
import HTMLFlipBook from 'react-pageflip'
import "./Flipbook.css";

const pages = [

];

const Flipbook = () => {
  return (
    <HTMLFlipBook 
    width={630} 
    height={820}
    maxShadowOpacity={0.5}
    drawShadow={true}
    showCover={true}
    size='fixed'
    >
      <div className="page-template cover">
        <img src="../Assets/Flipbook/cover1.png" className="page-image"></img>
      </div>
      <div className="page-template page1">
        <img src="../Assets/Flipbook/page1.png" className="page-image"></img>
      </div>
      <div className="page-template page2">
        <img src="../Assets/Flipbook/page2.png" className="page-image"></img>
      </div>
      <div className="page-template page3">
        <img src="../Assets/Flipbook/page3.png" className="page-image"></img>
      </div>
      <div className="page-template page4">
        <img src="../Assets/Flipbook/page4.png" className="page-image"></img>
      </div>
      <div className="page-template page5">
        <img src="../Assets/Flipbook/page5.png" className="page-image"></img>
      </div>
      <div className="page-template page6">
        <img src="../Assets/Flipbook/page6.png" className="page-image"></img>
      </div>
      <div className="page-template page7">
        <img src="../Assets/Flipbook/page7.png" className="page-image"></img>
      </div>
      <div className="page-template page8">
        <img src="../Assets/Flipbook/page8.png" className="page-image"></img>
      </div>
      <div className="page-template page9">
        <img src="../Assets/Flipbook/page9.png" className="page-image"></img>
      </div>
            <div className="page-template page10">
        <img src="../Assets/Flipbook/page10.png" className="page-image"></img>
      </div>
      <div className="page-template page11">
        <img src="../Assets/Flipbook/page11.png" className="page-image"></img>
      </div>
            <div className="page-template page12">
        <img src="../Assets/Flipbook/page12.png" className="page-image"></img>
      </div>
            <div className="page-template page13">
        <img src="../Assets/Flipbook/page13.png" className="page-image"></img>
      </div>
            <div className="page-template page14">
        <img src="../Assets/Flipbook/page14.png" className="page-image"></img>
      </div>
            <div className="page-template page15">
        <img src="../Assets/Flipbook/page15.png" className="page-image"></img>
      </div>
            <div className="page-template page16">
        <img src="../Assets/Flipbook/page16.png" className="page-image"></img>
      </div>
            <div className="page-template page17">
        <img src="../Assets/Flipbook/page17.png" className="page-image"></img>
      </div>
            <div className="page-template page18">
        <img src="../Assets/Flipbook/page18.png" className="page-image"></img>
      </div>
            <div className="page-template page19">
        <img src="../Assets/Flipbook/page19.png" className="page-image"></img>
      </div>
            <div className="page-template page20">
        <img src="../Assets/Flipbook/page20.png" className="page-image"></img>
      </div>
    </HTMLFlipBook>
  );
};

export default Flipbook;
