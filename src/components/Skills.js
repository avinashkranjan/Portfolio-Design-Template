import JavaScript from "../assets/img/skills/JavaScript.svg";
import Nodejs from "../assets/img/skills/Nodejs.svg";
import Mongodb from "../assets/img/skills/Mongodb.svg";
import Reactjs from "../assets/img/skills/Reactjs.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I apply best practices to software development, design, and
                delivery. <br></br> I'm a polyglot programmer who is able to
                work with diverse technologies.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={JavaScript} alt="..." />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={Nodejs} alt="..." />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img src={Mongodb} alt="..." />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={Reactjs} alt="..." />
                  <h5>ReactJS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt=".." />
    </section>
  );
};
