class Book {
    #title;
    #author;
    #year;
  
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    get title() {
      return this.#title;
    }
  
    set title(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Title must be a non-empty string');
      }
      this.#title = value;
    }
  
    get author() {
      return this.#author;
    }
  
    set author(value) {
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Author must be a non-empty string');
      }
      this.#author = value;
    }
  
    get year() {
      return this.#year;
    }
  
    set year(value) {
      const currentYear = new Date().getFullYear();
      if (typeof value !== 'number' || value > currentYear || value < 0) {
        throw new Error(`Year must be a positive number not greater than ${currentYear}`);
      }
      this.#year = value;
    }
  
    printInfo() {
      console.log(`Book: ${this.#title}, Author: ${this.#author}, Year: ${this.#year}`);
    }
  
    static findOldestBook(books) {
      if (!Array.isArray(books) || books.length === 0) {
        throw new Error('Input must be a non-empty array of books');
      }
  
      return books.reduce((oldest, current) => 
        current.year < oldest.year ? current : oldest
      );
    }
  }
  
  module.exports = Book;