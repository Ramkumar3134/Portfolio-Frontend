import axios from "axios";

const BASE_URL = "https://protfolio-backend-z3an.onrender.com/api/v1/contact";

export const createContact = async (contactData) => {
  try {
    const response = await axios.post(`${BASE_URL}/createContact`, contactData);
    return response.data;
  } catch (error) {
    console.error("Error sending contact:", error.response?.data || error.message);
    throw error;
  }
};
