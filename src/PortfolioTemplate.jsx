import  { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import portfolioUser from "./Images/PortFolioUser.webp";
import project1 from "./Images/projectImg1.jpg";
import project2 from "./Images/projectImg2.jpg";
import project3 from "./Images/projectImg3.jpg";
import "./PortfolioTemplate.css";

const PortfolioTemplate = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("vibrant");
    else setTheme("light");
  };

  const educationData = [
    {
      year: "2020 – 2024",
      title: "Bachelor of Technology",
      institution:
        "Vidarbha Institute of Technology, Nagpur (University)",
      detail: "Specialization: Artificial Intelligence & Data Science",
    },
    {
      year: "2019 – 2020",
      title: "Higher Secondary Education",
      institution:
        "Janta High School, Tumsar, Bhandara (Maharashtra State Board)",
    },
    {
      year: "2017 – 2018",
      title: "Secondary School Education",
      institution:
        "Janta High School, Tumsar, Bhandara (Maharashtra State Board)",
    },
  ];

  return (
    <>
      {/* ===== Navbar ===== */}
      <Navbar
        expand="lg"
        className="py-3 shadow-sm sticky-top navbar-custom"
        style={{ width: "100vw" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            Portfolio
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button onClick={toggleTheme} className="ms-3 theme-btn">
              Switch Theme
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* ===== Hero Section ===== */}
      <section className="hero text-center py-5">
        <Container>
          <img
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={portfolioUser}
            alt="Portfolio User"
            className="fade-in"
          />
          <h1 className="display-4 fw-bold fade-in">Hi, I'm Your Name</h1>
          <p className="lead mb-4 fade-in-delay">
            A passionate Frontend Developer building interactive UIs &
            modern web apps.
          </p>
          <div>
            <Button variant="primary" href="#projects">
              View My Work
            </Button>
            <Button
              variant="outline-primary"
              href="/Mitali_Resume.pdf"
              download
              className="ms-3"
            >
              Download Resume
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="py-5 about-section">
        <Container>
          <h2 className="text-center mb-4 section-title">About Me</h2>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src=""
                alt="profile"
                className="profile-img rounded-circle shadow"
              />
            </Col>
            <Col md={8}>
              <p>
                I’m a Computer Science student specializing in modern web
                design and MERN stack development. I create dynamic,
                responsive, and user-friendly websites using React, Bootstrap,
                and CSS animations. My goal is to build smooth, modern user
                experiences with clean and efficient code.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Education Section ===== */}
      <section className="education-section py-5">
        <h2 className="section-title text-center mb-5">Education</h2>
        <div className="education-container container">
          {educationData.map((item, index) => (
            <div key={index} className="education-card shadow-sm">
              <h3 className="education-year">{item.year}</h3>
              <h4 className="education-title">{item.title}</h4>
              <p className="education-institution">{item.institution}</p>
              {item.detail && (
                <p className="education-detail">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className="py-5 bg-section">
        <Container>
          <h2 className="text-center mb-5 section-title">Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project1} />
                <Card.Body>
                  <Card.Title>Expense Tracker Dashboard</Card.Title>
                  <Card.Text>
                   A React & Node.js dashboard to record finances, visualize spending, and track monthly budgets.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project2} style={{height:"270px"}} />
                <Card.Body>
                  <Card.Title>Blog Platform (MERN)</Card.Title>
                  <Card.Text>
                    A full-stack MERN blog where users can create, edit, and comment on posts with role-based access.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project3} />
                <Card.Body>
                  <Card.Title>Employee Management System</Card.Title>
                  <Card.Text>
                    A React & Node.js system to manage employees, departments, and attendance with admin controls.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Get In Touch</h2>
          <form
            action="https://formspree.io/f/mnqeyrpl"
            method="POST"
            className="mx-auto contact-form"
            style={{ maxWidth: "600px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control mb-3"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-control mb-3"
              rows="4"
            ></textarea>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </form>
        </Container>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-4 mt-5 footer">
        <p>© 2025 Your Name | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default PortfolioTemplate;

/* ==========================
   CSS: PortfolioTemplate.css
   ========================== */

/*
Paste this CSS into PortfolioTemplate.css file
*/

