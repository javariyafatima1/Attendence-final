import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = () => {
  return (
    <div>
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
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
