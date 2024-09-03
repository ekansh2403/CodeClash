import React, { useState } from 'react';

const AuthForm = ({ type, handleSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div>
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          required
        />
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
