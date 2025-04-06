const { fetchDataFromAPI } = require('./apiService');
const axios = require('axios');

jest.mock('axios');

describe('fetchDataFromAPI', () => {
  const mockEndpoint = 'https://api.example.com/data';
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('successful API response', async () => {
    const mockData = { id: 1 };
    axios.get.mockResolvedValue({ data: mockData, status: 200 });

    const result = await fetchDataFromAPI(mockEndpoint);
    
    expect(axios.get).toHaveBeenCalledWith(mockEndpoint, { params: {} });
    expect(result).toEqual({
      success: true,
      data: mockData,
      status: 200
    });
  });
});
