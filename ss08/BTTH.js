//xay dung lop BOOk
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class textBook extends Book {
    grade;
}
class Comic extends Book {
    studio;
}
// xay dung lop GENERic Libary
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find((books) => books.id === id);
    }
    removeBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
    updateBook(id, updateBook) {
        let book = this.books.find((book) => book.id === id);
        book = updateBook;
    }
    listBook() {
        return this.books;
    }
    findBookByTitleOrAuthor(searchString) {
        return this.books.filter((book) => book.title.includes(searchString) || book.author.includes(searchString));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter(books => books.year === year);
    }
}
let library = new Library();
library.addBook({ id: 1, title: "Iroman", author: "author", year: 1990, studio: "Marvel" });
console.log(library.listBook());
export {};
//# sourceMappingURL=BTTH.js.map