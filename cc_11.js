// Task 1: Creating a Book Class
// Create a class Book with the properties: title, author, isbn, & copies
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // assign title (string)
        this.author = author; // assign author (string)
        this.isbn = isbn; // assign ISBN (number)
        this.copies = copies // assign copies (number)
    }

    // Add a method getDetails()  that returns a formatted string of book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies Available: ${this.copies}`;
    }

    // Add a method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned
    updateCopies(quantity) {
        if (this.copies + quantity >= 0) {
            this.copies += quantity;
        } else {
            console.log("There are not enough copies available.")
        }
    };
};
// Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"



// Task 2: Creating a Borrower Class
// Create a class Borrower with the properties: name, borrowerID, and borrowedBooks
class Borrower {
    constructor(name, borrowerId) {
        this.name = name; // assign  (string)
        this.borrowerId = borrowerId; // assign borrowed ID (number)
        this.borrowedBooks = []; // assign borrowed books (array)
    }

    // Add a method borrowBook(book) that Adds a book title to borrowedBooks
    borrowBook(book) {
        this.borrowedBooks.push(book); 
    }
    // Add a method returnBook(book) that Removes the book from borrowedBooks
    returnBook(book) {
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);  
        } else {
            console.log(`${book.title} is not in borrowed list`)
        }
    };
};
// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); 
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []



// Task 3: Creating a Library Class
// Create a class Library with: books and borrowers
class Library {
    constructor() {
        this.books = []; // array of Book instances
        this.borrowers = []; // array of Borrower instances
    }
    // Adds a new book to the library
    addBook(book) {
        this.books.push(book);
    }
    // Logs all books details
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    };


    // Task 4: Implementing Book Borrowing
    // Add a method lendBook(borrowerId, isbn) in the Library class
    lendBook(borrowerId, isbn) {
        let book = this.books.find((b) => b.isbn === isbn); // Checks if the book exists 
        let borrower = this.borrowers.find((bw) => bw.borrowerId ===  borrowerId);
        if (!book) {
            console.log(`Book for ISBN: ${isbn} is not in library`);
            return;
        }
        if (!borrower) {
            console.log(`Borrower not found with Id: ${borrowerId}`);
            return;
        }
        if (book.copies > 0) { // Checks if the book has available copies 
            book.updateCopies(-1); // Reduces the book’s copies by 1
            borrower.borrowBook(book); // Updates the borrower's borrowedBooks list
           console.log("Book Borrowed");
        } else {
            console.log(`${book.title} not in stock`);
        }
    };


    // Task 5: Implementing Book Returns
    // Add a method returnBook(borrowerId, isbn) in the Library class
    returnBook(borrowerId, isbn) {
        let book = this.books.find((b) => b.isbn === isbn);
        let borrower = this.borrowers.find((bw) => bw.borrowerId ===  borrowerId);
        if (!book) {
            console.log(`Book for ISBN: ${isbn} is not in library`);
            return;
        } 
        if (!borrower) {
            console.log(`Borrower not found with Id: ${borrowerID}`);
            return;
        } else {
            book.updateCopies(1);
            borrower.returnBook(book);
            console.log("Book returned");
        }
    };
};

// Test Cases: Task 3
const library = new Library();
library.borrowers.push(borrower1)
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Test Cases: Task 4
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Test Cases: Task 5
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []