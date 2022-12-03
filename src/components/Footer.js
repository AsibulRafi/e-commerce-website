import React from "react";
import logo from "../assets/Logo.png";
import facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import Telegram from "../assets/Telegram.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__content-logo">
            <img src={logo} alt="footerIcon" />
          </div>
          <div className="footer__content-link">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms</a>
            <a href="/">Get In Touch</a>
          </div>
          <div className="footer__content-icon">
            <a href="https://www.facebook.com">
              <img src={facebook} alt="aboutIcon" />
            </a>
            <a href="https://www.instagram.com">
              <img src={Instagram} alt="aboutIcon" />
            </a>
            <a href="https://www.twitter.com">
              <img src={Twitter} alt="aboutIcon" />
            </a>
            <a href="https://telegram.org/">
              <img src={Telegram} alt="aboutIcon" />
            </a>
          </div>
        </div>
        <div className="copyright">
          &copy;Copyright Trémont. All right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
