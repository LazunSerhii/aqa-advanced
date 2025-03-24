const Book = require('./Book');
const EBook = require('./EBook');


const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);


book1.printInfo();
book2.printInfo();


const ebook1 = new EBook('1984', 'George Orwell', 1949, 'PDF');
ebook1.printInfo();

try {
  book1.title = 'New Title';
  console.log(book1.title); 
  
 
} catch (error) {
  console.error(error.message);
}


const books = [
  book1,
  book2,
  ebook1,
  new Book('Pride and Prejudice', 'Jane Austen', 1813)
];

const oldestBook = Book.findOldestBook(books);
console.log('Oldest book:');
oldestBook.printInfo();


const newBook = new Book('Dune', 'Frank Herbert', 1965);
const newEBook = EBook.createFromBook(newBook, 'EPUB');
console.log('Created EBook from Book:');
newEBook.printInfo();