// Lớp Book với thêm id (private)
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    // Lấy thông tin sách
    getInfo() {
        return `ID: ${this.id} | ${this.title} - ${this.author}`;
    }
    // Lấy id (để Library dùng tìm kiếm)
    getId() {
        return this.id;
    }
    // Cập nhật thông tin sách
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
// Lớp Library
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    // Sửa thông tin sách theo id
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(` Sách có ID ${id} đã được cập nhật.`);
        }
        else {
            console.log(` Không tìm thấy sách với ID ${id}.`);
        }
    }
}
// --- Sử dụng ---
const book1 = new Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book(2, "Lão Hạc", "Nam Cao");
const book3 = new Book(3, "Tắt Đèn", "Ngô Tất Tố");
const book4 = new Book(4, "Số Đỏ", "Vũ Trọng Phụng");
const book5 = new Book(5, "Tuổi Thơ Dữ Dội", "Phùng Quán");
const library = new Library();
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
export {};
//# sourceMappingURL=bai7.js.map