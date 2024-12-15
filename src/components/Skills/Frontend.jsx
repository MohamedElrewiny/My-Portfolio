import React from "react";

export default function Frontend() {
  window.addEventListener("scroll", function () {
    let ourSkills = document.querySelector(".skills__content");

    if (ourSkills) {
      let skillsOffsetTop = ourSkills.offsetTop;
      let skillsOuterHeight = ourSkills.offsetHeight;
      let windowHeight = window.innerHeight;
      let windowScrollTop = window.pageYOffset;

      if (
        windowScrollTop >=
        skillsOffsetTop + skillsOuterHeight - windowHeight
      ) {
        let allSkills = document.querySelectorAll(
          ".skill-box .skill-progress span"
        );

        allSkills.forEach((skill) => {
          skill.style.width = skill.dataset.progress;
        });
      }
    }
  });

  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Development</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">HTML5</div>
                <div class="skill-progress">
                  <span data-progress="90%">90%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">CSS3</div>
                <div class="skill-progress">
                  <span data-progress="90%">90%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">SASS</div>
                <div class="skill-progress">
                  <span data-progress="70%">70%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">Bootstrap</div>
                <div class="skill-progress">
                  <span data-progress="85%">85%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">Tailwind</div>
                <div class="skill-progress">
                  <span data-progress="75%">75%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">JavaScript</div>
                <div class="skill-progress">
                  <span data-progress="80%">80%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">TypeScript</div>
                <div class="skill-progress">
                  <span data-progress="60%">60%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">Next.JS</div>
                <div class="skill-progress">
                  <span data-progress="60%">60%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">jQuery</div>
                <div class="skill-progress">
                  <span data-progress="75%">75%</span>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div class="skill-box">
                <div class="skills-name">React</div>
                <div class="skill-progress">
                  <span data-progress="80%">80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
