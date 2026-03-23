import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>Contact Us</h1>
          <p>For Problemas, please reach out:</p>
          <Card className="p-3">
            <p><strong>Email:</strong> 20226349@s.ubaguio.edu </p>
            <p><strong>Phone:</strong> (63)9487324949 </p>
            
          </Card>
        </Col>
        <Col md={6}>
          <h3>Location</h3>
          <address>
            XYZ University<br />
            123 University Avenue<br />
            Baguio, Philippines
          </address>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;