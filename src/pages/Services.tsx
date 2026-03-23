import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Student Services</h1>
          <ListGroup variant="flush">
            <ListGroup.Item> Library Book Requests</ListGroup.Item>
            <ListGroup.Item> Event Feedback Submission</ListGroup.Item>
            <ListGroup.Item> IT Support Ticketing</ListGroup.Item>
            <ListGroup.Item> Academic Calendar Access</ListGroup.Item>
            <ListGroup.Item> Grade Portal</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;