import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = {
  // Disease prediction with regular image upload
  predictDisease: async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await axios.post(`${API_BASE_URL}/predict-disease/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Automated drone image processing
  processDroneImage: async (imageData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/drone-upload/`, imageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error processing drone image:', error);
      throw error;
    }
  },

  // Get drone status and latest data
  getDroneStatus: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/drone-status/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching drone status:', error);
      throw error;
    }
  },

  // Get supported disease classes
  getDiseaseClasses: async () => {
    const response = await axios.get(`${API_BASE_URL}/disease-classes/`);
    return response.data;
  },

  // Get historical predictions
  getPredictionHistory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/predictions/history/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching prediction history:', error);
      throw error;
    }
  },
};

export default api;