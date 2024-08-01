import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div>

      {/* Main Section */}

      <div className="main-section">
        <div className="column1">
          <h1 className="heading">Attendance Portal</h1>
          <p className="para1">
            An attendance portal page serves as a centralized platform for efficiently managing and tracking attendance-related information within an organization, institution, or event. Its primary objectives include recording attendance, providing real-time monitoring with live dashboards and alerts, and generating comprehensive reports and analytics to identify attendance patterns and trends.
          </p>
        </div>
        <div className="column2">
          <img
            src='https://myciti.in/wp-content/uploads/2021/02/staff-attendance-01.png'
            alt="Attendance"
            className="image1"
          />
        </div>
      </div>

      {/* Card Section */}

      <div className="card-section">
        <h1 className="section-heading">Select Your Card</h1>
        <div className="card-container">
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Student Card</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Student Attendance Portal</Card.Subtitle>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </Card.Text>
              <Card.Link href="#">kkkkkk</Card.Link>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Admin Card</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Admin Attendance Portal</Card.Subtitle>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Link href="#">Click here...</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>


      {/* Footer */}
      <footer className="footer">
      <Container>
          <Row>
          <Col className="text-center">
            <p className="mt-3">© 2024 Attendance Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Home;