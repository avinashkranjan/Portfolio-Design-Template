import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import one24os from "../assets/img/projects/one24os.png";
import one24trade from "../assets/img/projects/one24trade.png";
import one24partner from "../assets/img/projects/one24partner.png";
import spotify from "../assets/img/projects/spotify.png";
import recess from "../assets/img/projects/recess.png";
import covid19 from "../assets/img/projects/covid19.png";
import datamed from "../assets/img/projects/datamed.png";
import lifemedeasy from "../assets/img/projects/lifemedeasy.png";
import lifeblog from "../assets/img/projects/lifeblog.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const workProjects = [
    {
      title: "One24OS",
      tagLine: "One stop POS solution for small & medium scale businesses",
      imgUrl: one24os,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "One24Trade",
      tagLine:
        "Platform for trading, selling and managing of goods and services for supplier",
      imgUrl: one24trade,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "One24Partner",
      tagLine:
        "Cross platform mobile app for sales team to onbaord new stores and suppliers",
      imgUrl: one24partner,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
  ];

  const sideProjects = [
    {
      title: "Recess",
      tagLine: "A Social Media Platform for students",
      imgUrl: recess,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Spotify Clone",
      tagLine:
        "Spotify Clone using NEXT.JS 12.0! (Middleware, Spotify API, Tailwind, NextAuth, Recoil)",
      imgUrl: spotify,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Covid-19 Informer",
      tagLine:
        "One Place for all the stats around the world in an Interactive and Graphical way.",
      imgUrl: covid19,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "DataMed",
      tagLine:
        "ML web platform that predicts severity of Heart Failure & Breast Cancer.",
      imgUrl: datamed,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "LifeMedEasy",
      tagLine:
        "Automating Healthcare and making Health facilities available to everyone",
      imgUrl: lifemedeasy,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Lifestyle Blog",
      tagLine: "Lifestyle Blog Using MERN stack",
      imgUrl: lifeblog,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
  ];

  const miscProjects = [
    {
      title: "Amazing Python Scripts",
      tagLine:
        "Curated collection of Python scripts from Basics to Advance with automation task scripts.",
      imgUrl: spotify,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Friday",
      tagLine: "Your Personal Class Manager Assistant",
      imgUrl: covid19,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Awesome JavaScript Projects",
      tagLine:
        "A complete collection of small and useful projects made with magic that is JavaScript.",
      imgUrl: recess,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Pentesting-and-Hacking-Scripts",
      tagLine:
        "A curated collection of scripts helpful for Script Kiddie to Advanced Pentesters. ",
      imgUrl: covid19,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Mask-Detector",
      tagLine:
        "ML based surveillance system helps in detecting if a person is not wearing mask.",
      imgUrl: covid19,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
    {
      title: "Centralized-Grading-System(CGS)",
      tagLine:
        "One Place for all the Examination and Grading Needs in times on Online Exams.",
      imgUrl: covid19,
      githubUrl: spotify,
      deployedUrl: "https://github.com/spotify/spotify",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My open source side projects and stuff that I built with my
                    colleagues at work
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Side Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Misc</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {workProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <a
                          href="https://github.com/avinashkranjan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button>
                            <span>View More</span>
                          </button>
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {sideProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <a
                          href="https://github.com/avinashkranjan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button>
                            <span>View More</span>
                          </button>
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {miscProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <button>
                          <span>View More</span>
                        </button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="..."></img>
    </section>
  );
};
