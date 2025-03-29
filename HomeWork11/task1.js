function delayedConsoleOutput(text, delayMs) {
    setTimeout(() => {
      console.log(text);
    }, delayMs);
  }
  delayedConsoleOutput("текст 1", 2000);


  async function delayedConsoleOutput(text, delayMs) {
    await new Promise(resolve => setTimeout(resolve, delayMs));
    console.log(text);
  }
  delayedConsoleOutput("Асинхронний вивід", 3000);