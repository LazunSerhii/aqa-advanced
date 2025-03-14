function divide(numerator,denominator){
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Обидва аргументи повинні бути числами.");
    }
    if (denominator === 0) {
        throw new Error("Denominator не може бути 0.");
      }
      return numerator / denominator;
    }    

    try {
        console.log(divide(10, 2)); // Успішний виклик
      } catch (error) {
        console.error(error.message);
      } finally {
        console.log("Робота завершена");
      }
      
      try {
        console.log(divide(10, 0)); // Помилка: denominator дорівнює 0
      } catch (error) {
        console.error(error.message);
      } finally {
        console.log("Робота завершена");
      }
      
      try {
        console.log(divide("10", 2)); // Помилка: один з аргументів не є числом
      } catch (error) {
        console.error(error.message);
      } finally {
        console.log("Робота завершена");
      }
      
      try {
        console.log(divide(10, "2")); // Помилка: один з аргументів не є числом
      } catch (error) {
        console.error(error.message);
      } finally {
        console.log("Робота завершена");
      }

