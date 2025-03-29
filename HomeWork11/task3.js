async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error('Помилка при отриманні todo:', error);
      throw error;
    }
  }

  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Помилка при отриманні user:', error);
      throw error;
    }
  }

  async function handlePromises() {
    try {
      
      const promises = [fetchTodo(), fetchUser()];
      
      
      const allResults = await Promise.all(promises);
      console.log('Promise.all results:', allResults);
      
      
      const raceResult = await Promise.race(promises);
      console.log('Promise.race result:', raceResult);
      
      
      return {
        allResults,
        raceResult
      };
    } catch (error) {
      console.error('Помилка в handlePromises:', error);
      throw error;
    }
  }
  
  
  handlePromises()
    .then(results => {
      console.log('Фінальні результати:', results);
    })
    .catch(error => {
      console.error('Фінальна помилка:', error);
    });