// Lớp Book với thêm id (private)
class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    // Lấy thông tin sách
    public getInfo(): string {
        return `ID: ${this.id} | ${this.title} - ${this.author}`;
    }

    // Lấy id (để Library dùng tìm kiếm)
    public getId(): number {
        return this.id;
    }

    // Cập nhật thông tin sách
    public updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

// Lớp Library
class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    // Sửa thông tin sách theo id
    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log(` Sách có ID ${id} đã được cập nhật.`);
        } else {
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
