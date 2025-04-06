const axios = require('axios');

async function fetchDataFromAPI(endpoint, params = {}) {
  try {
    const response = await axios.get(endpoint, { params });
    return {
      success: true,
      data: response.data,
      status: response.status
    };
  } catch (error) {
    return {
      success: false,
      error: error.response ? {
        status: error.response.status,
        data: error.response.data
      } : { message: error.message }
    };
  }
}

module.exports = { fetchDataFromAPI };
