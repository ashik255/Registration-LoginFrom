import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './style.css'; // Import custom CSS for the login form

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setShowErrorMessage(false);
    setShowSuccessMessage(false);

    // Simple form validation for demonstration purposes
    if (!credentials.email || !credentials.password) {
      setShowErrorMessage(true);
      return;
    }

    // You can add your login logic here
    // For demonstration purposes, we'll just show a success message
    setShowSuccessMessage(true);
  };

  return (
    <div className="login-form-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h1>Login Form</h1>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        {/* Error message */}
        {showErrorMessage && (
          <Alert variant="danger" className="mt-3">
            Please fill in both email and password fields.
          </Alert>
        )}

        {/* Success message */}
        {showSuccessMessage && (
          <Alert variant="success" className="mt-3">
            Login successful! Welcome, {credentials.email}.
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
