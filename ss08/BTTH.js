var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//xay dung lop BOOk
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var textBook = /** @class */ (function (_super) {
    __extends(textBook, _super);
    function textBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return textBook;
}(Book));
var Comic = /** @class */ (function (_super) {
    __extends(Comic, _super);
    function Comic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comic;
}(Book));
// xay dung lop GENERic Libary
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookById = function (id) {
        return this.books.find(function (books) { return books.id === id; });
    };
    Library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    Library.prototype.updateBook = function (id, updateBook) {
        var book = this.books.find(function (book) { return book.id === id; });
        book = updateBook;
    };
    Library.prototype.listBook = function () {
        return this.books;
    };
    Library.prototype.findBookByTitleOrAuthor = function (searchString) {
        return this.books.filter(function (book) { return book.title.includes(searchString) || book.author.includes(searchString); });
    };
    Library.prototype.getTotalBooks = function () {
        return this.books.length;
    };
    Library.prototype.findBooksByYear = function (year) {
        return this.books.filter(function (books) { return books.year === year; });
    };
    return Library;
}());
var library = new Library();
library.addBook({ id: 1, title: "Iroman", author: "author", year: 1990, studio: "Marvel" });
console.log(library.listBook());
