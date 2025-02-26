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