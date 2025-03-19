const users = [
    { name: "Іван", email: "ivan@example.com", age: 25 },
    { name: "Олена", email: "olena@example.com", age: 30 },
    { name: "Петро", email: "petro@example.com", age: 28 }
  ];
  
  for (const { name, email, age } of users) {
    console.log(`${name},${email},${age}`);
  }

  const users = [
    { name: "Іван", email: "ivan@example.com", age: 25 },
    { name: "Олена", email: "olena@example.com", age: 30 },
    { name: "Петро", email: "petro@example.com", age: 28 }
  ];
  
  
  for (const user of users) {
    
    console.log(user);
  }