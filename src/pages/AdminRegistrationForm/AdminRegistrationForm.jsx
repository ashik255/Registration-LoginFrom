import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminRegistrationForm.css'; // Import custom CSS for the fancy design
const AdminRegistrationForm = () => {
  const [user, setUser] = useState({
    designation: '',
    yearOfExperience: '',
    email: '',
    password: '',
    fullName: '',
    address: '',
    profilePic: null
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      profilePic: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setShowSuccessMessage(false);
    setShowErrorMessage(false);

    // Form validation
    if (
      !user.designation ||
      !user.yearOfExperience ||
      !user.email ||
      !user.password ||
      !user.fullName ||
      !user.address ||
      !user.profilePic
    ) {
      setShowErrorMessage(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('designation', user.designation);
      formData.append('yearOfExperience', user.yearOfExperience);
      formData.append('email', user.email);
      formData.append('password', user.password);
      formData.append('fullName', user.fullName);
      formData.append('address', user.address);
      formData.append('profilePic', user.profilePic);

      // You can customize the URL based on the user type (trainer or trainee)
      await axios.post('http://localhost:8080/user/register', formData);

      setShowSuccessMessage(true);
      setUser({
        designation: '',
        yearOfExperience: '',
        email: '',
        password: '',
        fullName: '',
        address: '',
        profilePic: null
      });
    } catch (error) {
      console.error('Error registering user:', error);
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="custom-container">
       <h2 className='p-3'>Admin Registration Form</h2>
      <Form onSubmit={handleSubmit} className="registration-form-container">
       
        <Form.Group controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            value={user.designation}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="yearOfExperience">
          <Form.Label>Year of Experience</Form.Label>
          <Form.Control
            type="number"
            name="yearOfExperience"
            value={user.yearOfExperience}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={user.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="profilePic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            name="profilePic"
            onChange={handleFileChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        {/* Error message */}
        {showErrorMessage && (
          <Alert variant="danger" className="mt-3">
            Please fill in all the required fields.
          </Alert>
        )}

        {/* Success message */}
        {showSuccessMessage && (
          <Alert variant="success" className="mt-3">
            Registration successful! Your data has been submitted.
          </Alert>
        )}
      </Form>

      {/* Link to Login page */}
      <div className="login-link-container">
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default AdminRegistrationForm;
