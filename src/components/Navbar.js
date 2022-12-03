import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleClick = () => {
    setScrolled(true);
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const fadeElems = document.querySelectorAll(".has-fade");

    if (open === false) {
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      body.classList.add("noscroll");
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  }, [open]);
  return (
    <header className="header">
      <div className="overlay has-fade"></div>
      <nav className={scrolled ? "scrolled" : ""}>
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <div
          id="btnHamburger"
          className="header__toggle hide-for-desktop"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header__links hide-for-mobile">
          <HashLink
            to="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </HashLink>
          <HashLink
            to="#menu"
            className={
              activeLink === "menu" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("menu")}
          >
            Our Menu
          </HashLink>
          <HashLink
            to="#reservation"
            onClick={() => onUpdateActiveLink("reserve")}
            className={
              activeLink === "reserve" ? "active navbar-link" : "navbar-link"
            }
          >
            Reservation
          </HashLink>
          <HashLink
            to="#about"
            className={
              activeLink === "about" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("about")}
          >
            About Us
          </HashLink>
        </div>
        <div className="header__menu has-fade">
          <HashLink to="#banner" onClick={() => setOpen(false)}>
            Home
          </HashLink>
          <HashLink to="#menu" onClick={() => setOpen(false)}>
            Our Menu
          </HashLink>
          <HashLink to="#reservation" onClick={() => setOpen(false)}>
            Reservation
          </HashLink>
          <HashLink to="#about" onClick={() => setOpen(false)}>
            About Us
          </HashLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
