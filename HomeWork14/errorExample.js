const axios = require('axios');

async function makeRequestToWrongUrl() {
  try {
    // Навмисно неправильний URL
    const response = await axios.get('https://nonexistent-website-12345.com');
    return response.data;
  } catch (error) {
    // Обробка помилки та повернення зрозумілого повідомлення
    if (error.code === 'ENOTFOUND') {
      throw new Error('Не вдалося знайти сервер. Перевірте URL та інтернет-з\'єднання.');
    } else if (error.response) {
      throw new Error(`Помилка сервера: ${error.response.status}`);
    } else {
      throw new Error('Сталася невідома помилка при виконанні запиту');
    }
  }
}

module.exports = makeRequestToWrongUrl;
