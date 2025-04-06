const makeRequest = require('./apiRequest');
const axios = require('axios');

jest.mock('axios');

test('basic test - should pass if everything works', () => {
  expect(1 + 1).toBe(2);
});

describe('makeRequestWithCustomHeadersAndParams', () => {
  const testUrl = 'https://api.example.com/data';
  
  beforeEach(() => {
    axios.get.mockReset();
    axios.get.mockResolvedValue({ data: {} });
  });

  it('should include custom headers', async () => {
    const customHeaders = { 'X-Test-Header': 'test-value' };
    await makeRequest(testUrl, {}, customHeaders);
    
    expect(axios.get).toHaveBeenCalledWith(
      testUrl,
      expect.objectContaining({
        headers: expect.objectContaining({
          'X-Custom-Header': 'custom-value',
          ...customHeaders
        })
      })
    );
  });
});
