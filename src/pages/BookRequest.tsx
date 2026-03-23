import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';

interface BookRequestForm {
  studentName: string;
  studentId: string;
  bookTitle: string;
  author: string;
  reason: string;
}

const BookRequest: React.FC = () => {
  const [formData, setFormData] = useState<BookRequestForm>({
    studentName: '',
    studentId: '',
    bookTitle: '',
    author: '',
    reason: '',
  });
  const [submittedData, setSubmittedData] = useState<BookRequestForm | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowAlert(true);
    console.log('Book Request Submitted:', formData);
    
    setFormData({
      studentName: '',
      studentId: '',
      bookTitle: '',
      author: '',
      reason: '',
    });
    
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Book Request Form</h1>
          <p>Fill out the form below to request a book from the university library.</p>
          
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Request submitted successfully! Check console for details.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reason for Request</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please Type here"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Request
            </Button>
          </Form>

          {submittedData && (
            <Card className="mt-4">
              <Card.Header>Last Submitted Request</Card.Header>
              <Card.Body>
                <p><strong>Student:</strong> {submittedData.studentName}</p>
                <p><strong>ID:</strong> {submittedData.studentId}</p>
                <p><strong>Book:</strong> {submittedData.bookTitle}</p>
                <p><strong>Author:</strong> {submittedData.author}</p>
                <p><strong>Reason:</strong> {submittedData.reason}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BookRequest;