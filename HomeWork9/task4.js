const person = {
    firstName: "Сергій",
    lastName: "Лазун",
    age: 37
  };
  
  person.email = "lazunsm@gmail.com";
 
  delete person.age;
  
  console.log(person);