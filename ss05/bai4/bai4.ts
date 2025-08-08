// Định nghĩa lớp Vehicle với đóng gói và readonly
class Vehicle {
    public name: string;          // Ai cũng truy cập được
    protected year: number;       // Chỉ class và class con truy cập
    private company: string;      // Chỉ trong class này
    public readonly id: number;   // Không thể thay đổi sau khi khởi tạo

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    // Phương thức in thông tin
    public printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng: ${this.company}`);
    }
}

// Tạo một thực thể Vehicle
const v1 = new Vehicle(101, "Camry", 2020, "Toyota");

// In thông tin
v1.printInfo();

// Thử thay đổi giá trị readonly (sẽ báo lỗi khi compile)
// v1.id = 202; // Không được phép
