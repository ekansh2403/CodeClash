import React from 'react';
import { registerUser } from '../services/api';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const handleRegister = async (formData) => {
    try {
      const { token } = await registerUser(formData);
      localStorage.setItem('token', token); // Save token to localStorage
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <AuthForm type="register" handleSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
