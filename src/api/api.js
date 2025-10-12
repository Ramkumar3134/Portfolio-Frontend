import axios from "axios";

const BASE_URL = "https://protfolio-backend-691q.onrender.com"; 

// Create axios instance with better configuration
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createContact = async (contactData) => {
  try {
    console.log("Sending request to backend with data:", contactData);
    
    const ENDPOINT = "/api/v1/contact/createContact";
    const response = await api.post(ENDPOINT, contactData);
    
    console.log("Backend response:", response.data);
    return response.data;
    
  } catch (error) {
    console.error("API Error Details:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);
    
    // Create a more detailed error message
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        error.message || 
                        "Network error occurred";
    
    throw new Error(errorMessage);
  }
};