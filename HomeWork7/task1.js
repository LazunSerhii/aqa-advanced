function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
      handleEven(); 
    } else {
      handleOdd(); 
    }
  }
  
  
  function handleEven() {
    console.log("number is even");
  }
  
  
  function handleOdd() {
    console.log("number is odd");
  }
  
  
  handleNum(7, handleEven, handleOdd); 
  handleNum(10, handleEven, handleOdd); 