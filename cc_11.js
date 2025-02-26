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
        if (this.copies + quantity > 0) {
            this.copies += quantity;
        } else {
            console.log("There are not enough copies available.")
        }
    }
}
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
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);  
        } else {
            console.log(`${book} is not in borrowed list`)
        }
    }
} 
// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
