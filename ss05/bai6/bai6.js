// Lớp Book với tính đóng gói
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // Getter để lấy thông tin sách
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
}
// Lớp Library quản lý mảng sách
class Library {
    books = [];
    // Thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    // Xem danh sách sách trong thư viện
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}
// --- Sử dụng ---
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Lão Hạc", "Nam Cao");
const book3 = new Book("Tắt Đèn", "Ngô Tất Tố");
const book4 = new Book("Số Đỏ", "Vũ Trọng Phụng");
const book5 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
const library = new Library();
// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Xem danh sách
library.showBooks();
export {};
//# sourceMappingURL=bai6.js.map