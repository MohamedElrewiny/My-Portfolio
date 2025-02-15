import React, { useEffect, useState } from "react";
import "./Projects.css";
import saqrImg from "../../Assets/js/saqr.PNG";
import yummyImg from "../../Assets/js/yummy.PNG";
import weatherImg from "../../Assets/js/weather.PNG";
import LacaseImg from "../../Assets/css/spanish.PNG";
import specialDesign from "../../Assets/css/specialDesign.PNG";
import Gymster from "../../Assets/css/gymster.PNG";
import cafeHouse from "../../Assets/css/cafe.PNG";
import rings from "../../Assets/css/2rings.PNG";
import testReact from "../../Assets/react/task.PNG";
import ecommerce from "../../Assets/react/e-commerce.PNG";
import Quiz from "../../Assets/js/quiz.PNG";


export default function Projects() {
  const [btnActive, setbtnActive] = useState("all");
  let cards = document.querySelectorAll(".right__section .card");

  function manageCard(selectedCards) {
    cards.forEach((card) => {
      card.style.display = "none";
    });

    selectedCards.forEach((el) => {
      el.style.display = "block";
    });
  }

  useEffect(() => {
    manageCard(document.querySelectorAll(".all"));
  }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some of my works</span>

      <div className="projects__container container">
        <section className="left__section">
          <button
            data-crt=".all"
            onClick={() => {
              setbtnActive("all");
              manageCard(document.querySelectorAll(".all"));
            }}
            className={btnActive === "all" ? "active__btn" : null}
          >
            All Projects
          </button>
          <button
            data-crt=".html-css"
            onClick={() => {
              setbtnActive("html-css");
              manageCard(document.querySelectorAll(".html-css"));
            }}
            className={btnActive === "html-css" ? "active__btn" : null}
          >
            HTML & CSS
          </button>
          <button
            data-crt=".javascript"
            onClick={() => {
              setbtnActive("javascript");
              manageCard(document.querySelectorAll(".javascript"));
            }}
            className={btnActive === "javascript" ? "active__btn" : null}
          >
            JavaScript
          </button>
          <button
            data-crt=".react"
            onClick={() => {
              setbtnActive("react");
              manageCard(document.querySelectorAll(".react"));
            }}
            className={btnActive === "react" ? "active__btn" : null}
          >
            React
          </button>
        </section>

        <section className="right__section grid">
          <article className="card all react">
            <div className="img__card">
              <img src={ecommerce} alt="ecommerce" />
            </div>
            <div className="card__info">
              <h4>Fresh Cart</h4>
              <p>
                An E-commerce web application that allows users to browse, add
                to their cart, and purchase products seamlessly
              </p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/E-commerce-FreshCart/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/E-commerce-FreshCart"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all javascript">
            <div className="img__card">
              <img src={saqrImg} alt="saqrImg" />
            </div>
            <div className="card__info">
              <h4>Saqralmadina</h4>
              <p>
                A site for trips and transportation within the Kingdom of Saudi
                Arabia.
              </p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a href="https://saqralmadina.com/" target="_blank">
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/saqralmadina?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all javascript">
            <div className="img__card">
              <img src={LacaseImg} alt="LacaseImg" />
            </div>
            <div className="card__info">
              <h4>La case de los regalos</h4>
              <p>
                Spanish Commercial site selling perfumes, cosmetics and gifts
              </p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a href="https://lacasa-delosregalos.com/" target="_blank">
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/Spanish-Ecommerce?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all javascript">
            <div className="img__card">
              <img src={yummyImg} alt="yummyImg" />
            </div>
            <div className="card__info">
              <h4>Yummy</h4>
              <p>display foods of different types, countries through its API</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/Yummy/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/Yummy?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all javascript">
            <div className="img__card">
              <img src={weatherImg} alt="weatherImg" />
            </div>
            <div className="card__info">
              <h4>The weather</h4>
              <p>
                display the weather conditions in more than one place around the
                world
              </p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/weather-/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/weather-?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all javascript">
            <div className="img__card">
              <img src={Quiz} alt="QuizIMG" />
            </div>
            <div className="card__info">
              <h4>Quiz App</h4>
              <p>
              Electronic questions system (tests) at a specific time and at the end the result is displayed
              </p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/Quiz-App/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/Quiz-App?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all react">
            <div className="img__card">
              <img src={testReact} alt="testReact" />
            </div>
            <div className="card__info">
              <h4>Routing Test</h4>
              <p>Routing for Testing</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/routingReactTask/#/home"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/routingReactTask"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>









          <article className="card all html-css">
            <div className="img__card">
              <img src={specialDesign} alt="specialDesign" />
            </div>
            <div className="card__info">
              <h4>Special Design</h4>
              <p>Special Design for Testing</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/special-design/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/special-design?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all html-css">
            <div className="img__card">
              <img src={Gymster} alt="Gymster" />
            </div>
            <div className="card__info">
              <h4>Gymster</h4>
              <p>Gymster for Testing</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/GYMSTER/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/GYMSTER?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all html-css">
            <div className="img__card">
              <img src={cafeHouse} alt="cafeHouse" />
            </div>
            <div className="card__info">
              <h4>cafeHouse</h4>
              <p>cafeHouse for Testing</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/Cafe-/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/Cafe-?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card all html-css">
            <div className="img__card">
              <img src={rings} alt="2rings" />
            </div>
            <div className="card__info">
              <h4>2rings</h4>
              <p>2rings for Testing</p>
            </div>
            <div className="card__links">
              <div className="demo">
                <a
                  href="https://mohamedelrewiny.github.io/2Rings/"
                  target="_blank"
                >
                  <i class="bx bx-link"></i> DEMO
                </a>
              </div>
              <div className="repo">
                <a
                  href="https://github.com/MohamedElrewiny/2Rings?tab=readme-ov-file"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i> GitHub
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
