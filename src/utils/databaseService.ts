
/**
 * Database connection utility for MilesWeb SQL hosting
 * 
 * This file provides functions to interact with your MySQL/MariaDB database hosted on MilesWeb.
 * When deploying to production, update the connection parameters with your actual credentials.
 */

// Function to handle form submissions (registration, contact, paper submissions)
export const submitFormToDatabase = async (formData: Record<string, any>, formType: 'registration' | 'contact' | 'submission') => {
  try {
    // In development, we'll just console log the data
    // In production, this will make an API call to your server-side script
    console.log(`Submitting ${formType} data:`, formData);

    // For production deployment, you'll use fetch to send data to your PHP API endpoint on MilesWeb
    const response = await fetch(`/api/${formType}.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error(`Error submitting ${formType} form:`, error);
    return { success: false, error: `Failed to submit ${formType} form. Please try again.` };
  }
};

// Function to fetch data from the database
export const fetchDataFromDatabase = async (endpoint: string, params?: Record<string, any>) => {
  try {
    // Build query string from params
    const queryString = params 
      ? '?' + new URLSearchParams(params as Record<string, string>).toString() 
      : '';

    // For production deployment, this will call your PHP API on MilesWeb
    const response = await fetch(`/api/${endpoint}.php${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return { success: false, error: `Failed to fetch data. Please try again.` };
  }
};
