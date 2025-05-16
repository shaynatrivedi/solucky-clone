import React, { useState } from "react";
import './Media.css';
import Footer from './Footer';
import EmbeddedContent from "./EmbeddedContent";

const Media = () => {
    const [showEmbedded, setShowEmbedded] = useState(false);

    return(
        <div className="media-page">
            <div className="video-text-container">
                <video autoPlay loop muted>
                    <source src="../Assets/Media/text-video.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="text-box">
                <h1 className="media-header-text">
                    MEDIA
                </h1>
            </div>

            <div className="media-info-container">
                <div className="media-info-title">
                    our creative evolution
                </div>
                <div className="media-paragraph-text">
                    At solucky, our team's creativity shines through captivating editorial content.
                    Every few months, we release a magazine issue featuring three to four main photoshoots,
                    showcasing artistic flair & countless hours of dedication to an eccentric theme. From 
                    our early days to now, our media reflects a growing community driven by collaboration,
                    creativity, & storytelling. Explore photos, videos, & highlights from our magazine issues,
                    events, & collaborations, capturing the evolution of our brand.
                </div>
            </div>

            <div className="macbook-interact-container">
                <img className="macbook-image" src="../Assets/Media/macbook.svg"></img>
                <div 
                    className="laptop-screen-frame"
                    onClick={() => setShowEmbedded(true)}
                    >
                    {showEmbedded ? (
                        <EmbeddedContent />
                    ) : (
                        <div className="click-prompt">Click here to open the component</div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Media