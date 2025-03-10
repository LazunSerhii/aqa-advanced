function calculateAreaDeclaration(width, height) {
    return width * height;
  }
  
  
  const calculateAreaExpression = function(width, height) {
    return width * height;
  };
  
  
  const calculateAreaArrow = (width, height) => width * height;
  
  
  const width = 5;
  const height = 10;
  
  console.log("Площа (Function Declaration):", calculateAreaDeclaration(width, height)); 
  console.log("Площа (Function Expression):", calculateAreaExpression(width, height));   
  console.log("Площа (Arrow Function):", calculateAreaArrow(width, height));            