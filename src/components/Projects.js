import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "London App Brewery",
      description: "http://londonappbrewery.com",
      imgUrl: projImg1,
    },
    {
      title: "Blog Websites",
      description: "Your personal Portfolio Website",
      imgUrl: projImg2,
    },
    {
      title: "UX/UI Design",
      description: "3D Animation Designs",
      imgUrl: projImg3,
    },
    {
      title: "E-commerce Website ",
      description: "Sell your Products Faster",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Complete eEcommerece website Developer🔥, Online Services Management System, Complete Authentication System , Intrective Website Design(HTML, CSS, JS, REACT JS, Bootstrap)</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Convert PSD to HTML & CSS.  Using Object-Oriented CSS, worked on multiple components afterthatputtingaltogether.  Build reusable code for future use.  Made it responsive according to mobile, tablets and laptopscreens.  Applied optimization on images.  Learned how we troubleshoot the layout issues.  Add animations when user scrolling.  Apply SEO techniques to make it search engine friendly.  Validate HTML and CSS with markup validation service
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>1.Worked on Movies rental site and made multiple components also composed these components.
                      2. Applied Pagination , Filtering search results & Add sorting icon in Title bar to sort Data.
                      3.Add Routing with React Router Dome Library.
                       Building forms with bootstrap also extract formcomponent tomakeitreusable.  Calling Backend services using Axios, access the JSONendpoints withRESTAPI.  Installing MongoDB & connect it with frontend.  Advanced React features i.e Hooks.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
