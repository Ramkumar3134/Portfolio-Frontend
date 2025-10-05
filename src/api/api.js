import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "https://protfolio-backend-691q.onrender.com/api/v1/contact/createContact";
=======
const BASE_URL = "https://protfolio-backend-3ndo.onrender.com/api/v1/contact/createContact";
>>>>>>> e4c2a09352e4322219ac57259dc81892a969df1e

export const createContact = async (contactData) => {
  try {
    const response = await axios.post(`${BASE_URL}/createContact`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error sending contact:", error.response?.data || error.message);
    throw error;
  }
};
