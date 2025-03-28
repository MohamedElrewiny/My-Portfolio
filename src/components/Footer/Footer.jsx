import React from "react";
import "./Footer.css";
import Logo_Footer from "../../Assets/Logo.PNG";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__title Logo">
            <img src={Logo_Footer} alt="Logo_Footer" width={120} />
          </div>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/mohamed.elrewiny.357?mibextid=ZbWKwL"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/m.a.morad22?igsh=MTN5b2hibWc1NDlmcg=="
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-elrewiny-a8457833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>

            <a
              href="https://github.com/MohamedElrewiny"
              className="footer__social-link"
              target="_blank"
            >
              <i class="bx bxl-github"></i>
            </a>
          </div>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#qualification" className="footer__link">
              Qualification
              </a>
            </li>


          </ul>

          <span className="footer__copy">
            Copyright &#169; 2024. All rigths reserved by{" "}
            <a className="footer__copy-name" href="https://wa.me/+9660570034062">
              Mohamed Morad
            </a>{" "}
          </span>
        </div>
      </footer>
    </>
  );
}
