// Lớp Book với tính đóng gói
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    // Getter để lấy thông tin sách
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " - ").concat(this.author);
    };
    return Book;
}());
// Lớp Library quản lý mảng sách
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    // Thêm sách vào thư viện
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    // Xem danh sách sách trong thư viện
    Library.prototype.showBooks = function () {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(function (book, index) {
            console.log("".concat(index + 1, ". ").concat(book.getInfo()));
        });
    };
    return Library;
}());
// --- Sử dụng ---
var book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
var book2 = new Book("Lão Hạc", "Nam Cao");
var book3 = new Book("Tắt Đèn", "Ngô Tất Tố");
var book4 = new Book("Số Đỏ", "Vũ Trọng Phụng");
var book5 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
var library = new Library();
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Xem danh sách
library.showBooks();
