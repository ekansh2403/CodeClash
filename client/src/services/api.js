import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Submit code
export const submitCode = async (codeData) => {
  try {
    const response = await axios.post(`${API_URL}/code/submit`, codeData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get submission result
export const getCodeResult = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/code/result/${token}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
