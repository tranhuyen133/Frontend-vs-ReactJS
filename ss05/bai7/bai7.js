// Lớp Book với thêm id (private)
var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    // Lấy thông tin sách
    Book.prototype.getInfo = function () {
        return "ID: ".concat(this.id, " | ").concat(this.title, " - ").concat(this.author);
    };
    // Lấy id (để Library dùng tìm kiếm)
    Book.prototype.getId = function () {
        return this.id;
    };
    // Cập nhật thông tin sách
    Book.prototype.updateInfo = function (title, author) {
        this.title = title;
        this.author = author;
    };
    return Book;
}());
// Lớp Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". ").concat(book.getInfo()));
        });
    };
    // Sửa thông tin sách theo id
    Library.prototype.updateBookById = function (id, newTitle, newAuthor) {
        var book = this.books.find(function (b) { return b.getId() === id; });
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(" S\u00E1ch c\u00F3 ID ".concat(id, " \u0111\u00E3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt."));
        }
        else {
            console.log(" Kh\u00F4ng t\u00ECm th\u1EA5y s\u00E1ch v\u1EDBi ID ".concat(id, "."));
        }
    };
    return Library;
}());
// --- Sử dụng ---
var book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
var book2 = new Book(2, "Lão Hạc", "Nam Cao");
var book3 = new Book(3, "Tắt Đèn", "Ngô Tất Tố");
var book4 = new Book(4, "Số Đỏ", "Vũ Trọng Phụng");
var book5 = new Book(5, "Tuổi Thơ Dữ Dội", "Phùng Quán");
var library = new Library();
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// In danh sách ban đầu
library.showBooks();
// Sửa thông tin sách có ID 3
library.updateBookById(3, "Tắt Đèn (Bản Mới)", "Ngô Tất Tố");
// In danh sách sau khi sửa
console.log("\nSau khi cập nhật:");
library.showBooks();
