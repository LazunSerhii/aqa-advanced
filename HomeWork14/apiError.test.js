const makeFailingRequest = require('./errorExample');
const axios = require('axios');

jest.mock('axios');

describe('Тестування обробки помилок Axios', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('має обробляти DNS помилки', async () => {
    axios.get.mockRejectedValue({ code: 'ENOTFOUND' });

    await expect(makeFailingRequest())
      .rejects
      .toThrow('DNS запит не вдалось виконати: сервер не знайдений');
  });

  it('має обробляти HTTP помилки', async () => {
    axios.get.mockRejectedValue({ 
      response: { status: 404 } 
    });

    await expect(makeFailingRequest())
      .rejects
      .toThrow('Сервер повернув помилку: 404');
  });

  it('має обробляти інші помилки', async () => {
    axios.get.mockRejectedValue(new Error('Timeout exceeded'));

    await expect(makeFailingRequest())
      .rejects
      .toThrow('Помилка при виконанні запиту: Timeout exceeded');
  });
});
