const axios = require('axios');

async function makeRequestWithCustomHeadersAndParams(url, params = {}, headers = {}) {
  const response = await axios.get(url, {
    params,
    headers: {
      'X-Custom-Header': 'custom-value',
      ...headers
    }
  });
  return response.data;
}

module.exports = makeRequestWithCustomHeadersAndParams;
