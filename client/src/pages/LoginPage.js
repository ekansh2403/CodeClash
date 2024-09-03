import React from 'react';
import { loginUser } from '../services/api';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      const { token } = await loginUser(formData);
      localStorage.setItem('token', token); // Save token to localStorage
      alert('Login successful!');
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <AuthForm type="login" handleSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
