import React from "react";
import facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import Telegram from "../assets/Telegram.png";
import aboutImg from "../assets/aboutImg.png";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__heading">
        <h4>Why Trémont </h4>
        <h2>About Us</h2>
      </div>
      <div className="about__content">
        <div className="about__content-info">
          <h2>We Always Serve You Better</h2>
          <p>
            We combine traditional preparations with local ingredients for
            dishes that are authentic to both their Spanish origins and New York
            setting
          </p>
          <h4>Find Us on:</h4>
          <div className="about__content-info-social">
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
        <div className="about__content-img">
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
