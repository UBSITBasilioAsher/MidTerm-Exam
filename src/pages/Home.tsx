import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="display-4">Welcome to the Student Portal</h1>
          <p className="lead">
            Your gateway to university services. Access resources, request books, and share your feedback effortlessly.
          </p>
          <Button variant="primary" size="lg" href="/services">
            Explore Services
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title> Book Request</Card.Title>
              <Card.Text>
                Request textbooks and materials for your courses directly through the portal.
              </Card.Text>
              <Button variant="outline-primary" href="/book-request">Request Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title> Event Feedback</Card.Title>
              <Card.Text>
                Share your experience and help us improve university events.
              </Card.Text>
              <Button variant="outline-primary" href="/event-feedback">Give Feedback</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title> Support</Card.Title>
              <Card.Text>
                Have questions? Contact our IT support team for assistance.
              </Card.Text>
              <Button variant="outline-primary" href="/contact">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;