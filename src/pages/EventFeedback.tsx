import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';

interface FeedbackData {
  eventName: string;
  rating: string;
  comments: string;
  attendeeName: string;
}

const EventFeedback: React.FC = () => {
  
  const eventNameRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLSelectElement>(null);
  const commentsRef = useRef<HTMLTextAreaElement>(null);
  const attendeeNameRef = useRef<HTMLInputElement>(null);
  
  const [submittedFeedback, setSubmittedFeedback] = useState<FeedbackData | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const feedback: FeedbackData = {
      eventName: eventNameRef.current?.value || '',
      rating: ratingRef.current?.value || '',
      comments: commentsRef.current?.value || '',
      attendeeName: attendeeNameRef.current?.value || '',
    };
    
    setSubmittedFeedback(feedback);
    setShowAlert(true);
    console.log('Event Feedback Submitted:', feedback);
    
    e.currentTarget.reset();
    
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Event Feedback Form</h1>
          <p>Help us improve by sharing your feedback on university events.</p>
          
          {showAlert && (
            <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
              Feedback submitted! Thank you for your input.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                ref={eventNameRef}
                required
                placeholder="e.g., Freshmen Orientation"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Name (Optional)</Form.Label>
              <Form.Control
                type="text"
                ref={attendeeNameRef}
                placeholder="Leave blank if you wish to stay anonymous"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select ref={ratingRef} required>
                <option value="">Select a rating</option>
                <option value="5">- Excellent</option>
                <option value="4">- Good</option>
                <option value="3">- Average</option>
                <option value="2">- Poor</option>
                <option value="1">- Very Poor</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comments / Suggestions</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                ref={commentsRef}
                placeholder="What did you like? What can we improve?"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit Feedback
            </Button>
          </Form>

          {submittedFeedback && (
            <Card className="mt-4">
              <Card.Header>Latest Feedback Submission</Card.Header>
              <Card.Body>
                <p><strong>Event:</strong> {submittedFeedback.eventName}</p>
                <p><strong>Attendee:</strong> {submittedFeedback.attendeeName || 'Anonymous'}</p>
                <p><strong>Rating:</strong> {submittedFeedback.rating}</p>
                <p><strong>Comments:</strong> {submittedFeedback.comments}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EventFeedback;