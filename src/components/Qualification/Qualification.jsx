import React, { useState } from "react";
import "./Qualification.css";

export default function Qualification() {
  const [toggleState, settoggleState] = useState(1);

  const toggleTap = (index) => {
    settoggleState(index);
  };
  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={()=>toggleTap(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={()=>toggleTap(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Bachelor's Degree in Information Technologies </h3>
                  <span className="qualification__subtitle">
                  Kafr-Elsheikh University / Faculty of Computers and Information
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Sept 2018 - Jun 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Information Technology Institute (ITI)</h3>
                  <span className="qualification__subtitle">
                  Training program in cyber-security
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Jul 2021 - Sept 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">RMS</h3>
                  <span className="qualification__subtitle">
                  Full Stack Development Internship
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Aug 2020 - Jul 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Expert</h3>
                  <span className="qualification__subtitle">
                    Spain - Institute
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - present
                  </div>
                </div>
              </div> */}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
                            <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Ultra-Progress</h3>
                  <span className="qualification__subtitle">
                    FrontEnd Remotly
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>Mar 2025 - present
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">IT.RENADMADI</h3>
                  <span className="qualification__subtitle">
                    FrontEnd Remotly
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Jun 2024 - Dec 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Ultra-Progress</h3>
                  <span className="qualification__subtitle">
                    FrontEnd Remotly
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>Mar 2024 - Jun 2024
                  </div>
                </div>
              </div>

              {/* <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">Figma - Spain</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2021 - present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
