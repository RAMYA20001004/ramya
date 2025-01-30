import React, { useState } from "react";

const Portfolio = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <a href="/">Nikhil Pusala</a>
        <div onClick={handleClick}>
          <ul className={clicked ? "list activeNav" : "list"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>

      <div id="body-content">
        <section id="home">
          <h1 className="home-content">
            Hi,
            <br />
            I'm <span className="home-title-color">Nikhil</span>
            <br />
            A Quality Specialist
          </h1>
          <div className="img-box">
            <img src={`${process.env.PUBLIC_URL}/images/pattern.png`} className="back-img" alt="Background pattern" />
            <img src={`${process.env.PUBLIC_URL}/images/nikhl.png`} className="main-img" alt="Nikhil's Profile" />
          </div>
          <div className="home-buttons d-flex flex-wrap justify-content-start">
            <a className="button" href="#contact">Contact</a>
            <a className="button" href="resume.pdf" download>Download CV</a>
            <a href="https://www.linkedin.com/in/nikhil-pusala-03b714227/" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-linkedin-in home-icons"></i>
            </a>
          </div>
        </section>

        <section id="about">
          <h1 className="body-titles">About Me</h1>
          <p id="about-content">
            I'm a dedicated Power BI professional with 3+ years of experience crafting interactive, responsive designs.
            My expertise lies in React.js, Redux, and JavaScript, where I specialize in building intuitive user interfaces.
            I am passionate about refining my skills in frontend development and collaborating on innovative projects.
          </p>
        </section>

        <section id="skills">
          <h1 className="body-titles">Skills</h1>
          <div className="container">
            <div className="row">
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="React.js" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/bootstrap.png`} alt="Bootstrap" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/html5.png`} alt="HTML5" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="CSS3" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/javascript.png`} alt="JavaScript" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/redux.png`} alt="Redux" /></div>
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/git.png`} alt="Git" /></div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h1 className="body-titles">Contact Me</h1>
          <div className="container">
            <div className="row">
              <div className="contact-section col-md-4 col-12">
                <i className="fa-solid fa-location-dot contact-icon"></i>
                <span className="pl-3">
                  <h3>Address</h3>
                  <p>Hanamkonda, Warangal, New Rayapura</p>
                </span>
              </div>
              <div className="contact-section col-md-4 col-12">
                <i className="fa-solid fa-phone contact-icon"></i>
                <span className="pl-3">
                  <h3>Phone</h3>
                  <p>(701) 326-0193</p>
                </span>
              </div>
              <div className="contact-section col-md-4 col-12">
                <i className="fa-regular fa-envelope contact-icon"></i>
                <span className="pl-3">
                  <h3>Email</h3>
                  <p>nikhilvishwa27@gmail.com</p>
                </span>
              </div>
              <div className="contact-section col-md-12 col-12">
                <i className="fa-brands fa-linkedin-in contact-icon"></i>
                <span className="pl-3">
                  <h3>LinkedIn</h3>
                  <a className="contact-linkedIn" href="https://www.linkedin.com/in/nikhil-pusala-03b714227/" target="_blank" rel="noreferrer noopener">
                    Visit my LinkedIn Profile
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Portfolio;
