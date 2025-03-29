function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      })
      .then(todo => {
        console.log('Отримано todo:', todo); 
        return todo; 
      })
      .catch(error => {
        console.error('Помилка при запиті:', error);
        throw error; 
      });
  }
  
  
  fetchTodo()
    .then(todo => console.log('Результат:', todo))
    .catch(error => console.error('Помилка:', error));

    
function fetchUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  
  const userPromises = [
    fetchUser(1),  
    fetchUser(2)   
  ];
  
  
  const allUsersPromise = Promise.all(userPromises)
    .then(users => {
      console.log('Promise.all - всі користувачі:', users);
      return users; 
    })
    .catch(error => {
      console.error('Помилка в Promise.all:', error);
      throw error;
    });
  
 
  const firstUserPromise = Promise.race(userPromises)
    .then(user => {
      console.log('Promise.race - перший отриманий користувач:', user);
      return user; 
    })
    .catch(error => {
      console.error('Помилка в Promise.race:', error);
      throw error;
    });
  
  
  allUsersPromise
    .then(users => console.log('Результат Promise.all:', users));
  
  firstUserPromise
    .then(user => console.log('Результат Promise.race:', user));