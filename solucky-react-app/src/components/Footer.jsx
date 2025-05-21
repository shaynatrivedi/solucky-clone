import React from "react";
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () =>{
    const { pathname } = useLocation();
    // list all the paths you want in dark-red:
    const redBgRoutes = ['/', '/media', '/events', '/team'];

    const bg = redBgRoutes.includes(pathname) ? '#3C0000' : '#030303';
    return(
        <div className="footer" style={{ backgroundColor: bg }}>
        <div className="footer-card num1">
          <p className="footer-card-title">EXPLORE</p>
          
          <div className="explore-links-container">
            <div className="left-links">
              <a className="explore-links" href="www.google.com">home</a>
              <a className="explore-links" href="www.google.com">shop</a>
              <a className="explore-links" href="www.google.com">magazine</a>
              <a className="explore-links" href="www.google.com">media</a>
            </div>

            <div className="right-links">
              <a className="explore-links" href="www.google.com">collabs</a>
              <a className="explore-links" href="www.google.com">events</a>
              <a className="explore-links" href="www.google.com">team</a>
              <a className="explore-links" href="www.google.com">about</a>
            </div>
          </div>
        
        </div>
        <div className="footer-card num2">
          <p className="footer-card-title">JOIN OUR TEAM</p>
          <a className="join-team-links">become a <i>solucky contributor</i></a>
          <a className="join-team-links">become a <i>solucky model</i></a>
        </div>

        <div className="footer-card num3">
          <p className="footer-card-title">GET IN TOUCH</p>
          <div className="touch-link-container">
            <div className="logo-links-div">
              <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                <img src="Assets/Shop/insta-shop-link.png" alt='insta-logo'></img>
              </a>

              <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                <img src="Assets/Shop/spotify-link.png"alt='spotify-logo'></img>
              </a>

              <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                <img src="Assets/Shop/linkedin-link.png" alt='linkedin-logo'></img>
              </a>

              <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                <img src="Assets/Shop/pinterest-link.png" alt='pinterest-logo'></img>
              </a>

              <a href="https://stackoverflow.com/questions/42463871/how-to-put-spaces-between-text-in-html">
                <img src="Assets/Shop/tiktok-link.png" alt='tiktok-logo'></img>
              </a>
            </div>

            <div className="email-link">
              solucky.contact@gmail.com
            </div>

            <div className="join-team-links">
            subscribe to <i>solucky</i> magazine
            </div>

          </div>
        </div>

        <div className="footer-card num4">
          <p className="footer-card-title">ACKNOWLEDGEMENTS</p>
          <div className="acknowledgement-container">
            <p className="position-name"><span className="bold-position">Product & UX/UI Designer:</span> Shayna Trivedi</p>
            <p className="position-name"><span className="bold-position">Fullstack Web Developer:</span> Taj Sharma</p>
            <p className="position-name"><span className="bold-position">Brand & Creative Director:</span> Sanjana Solanki</p>
            <p className="position-name"><span className="bold-position">Brand Advisors:</span> Shayari Saha & Amani Chowdhury</p>
          </div>
        </div>

      </div>
    )
}

export default Footer;