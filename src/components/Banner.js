import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import reservation from "../assets/reservation.png";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Eat", "Drink", "Visit"];
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    const i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="#home">
      <div className="banner__wrapper">
        <div className="banner__content">
          <h4 className="banner__content-slider">{text}</h4>
          <h2 className="banner__content-heading">
            FEEL THE AUTENTHIC & ORIGINAL <br />
            TASTE FROM US
          </h2>
          <div className="banner__content-btn">
            <HashLink to="#reservation">
              <p>Make Reservation</p>
              <img src={reservation} alt="icon" />
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
