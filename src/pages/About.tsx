import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About XYZ University</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default About;