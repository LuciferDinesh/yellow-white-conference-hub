
import axios from 'axios';

// Base URL for API endpoints
const API_BASE_URL = '/api';

// Function to fetch data from the database
export const fetchFromDatabase = async (endpoint: string, params: object = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error('Database fetch error:', error);
    throw error;
  }
};

// Function to post data to the database
export const postToDatabase = async (endpoint: string, data: object) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Database post error:', error);
    throw error;
  }
};

// Function to update data in the database
export const updateInDatabase = async (endpoint: string, data: object) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Database update error:', error);
    throw error;
  }
};

// Function to delete data from the database
export const deleteFromDatabase = async (endpoint: string, id: string | number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Database delete error:', error);
    throw error;
  }
};
