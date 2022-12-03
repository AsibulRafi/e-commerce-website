import React from "react";

const Info = () => {
  return (
    <section className="info">
      <div className="info__wrapper">
        <div className="info__heading">
          <h2>
            123 Demo Street <br />
            Brooklyn, New York 12345
          </h2>
          <button
            onClick={() =>
              (window.location.href = "https://www.google.com/maps")
            }
          >
            Get Direction
          </button>
        </div>
        <div className="info__date">
          <div className="info__date-single">
            Monday–Thursday <br /> 12pm–10pm
          </div>
          <div className="info__date-single">
            Friday–Sunday <br />
            12pm–11pm
          </div>
        </div>
        <div className="info__content">
          <div className="info__content-single">
            <h2>20</h2>
            <p>Expert Chef’s</p>
          </div>
          <div className="info__content-single">
            <h2>8</h2>
            <p>Years Experience</p>
          </div>
          <div className="info__content-single">
            <h2>50+</h2>
            <p>Menu Dishes</p>
          </div>
          <div className="info__content-single">
            <h2>500+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
