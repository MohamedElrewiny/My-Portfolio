import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from '../../Assets/Logo.PNG';


export default function Header() {
  /*=============== Toggle Menu ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY > 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  const [Toggle, showMenu] = useState(false);

  // Active Link when scroll && focus
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo Page" width={150} />
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className={`nav__item ${activeLink === 'home' ? 'active' : ''}`}>
              <a href="#home" className="nav__link ">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className={`nav__item ${activeLink === 'about' ? 'active' : ''}`}>
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className={`nav__item ${activeLink === 'skills' ? 'active' : ''}`}>
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className={`nav__item ${activeLink === 'projects' ? 'active' : ''}`}>
              <a href="#projects" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
              </a>
            </li>

            <li className={`nav__item ${activeLink === 'portfolio' ? 'active' : ''}`}>
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className={`nav__item ${activeLink === 'contact' ? 'active' : ''}`}>
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
