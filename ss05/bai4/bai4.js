// Định nghĩa lớp Vehicle với đóng gói và readonly
class Vehicle {
    name; // Ai cũng truy cập được
    year; // Chỉ class và class con truy cập
    company; // Chỉ trong class này
    id; // Không thể thay đổi sau khi khởi tạo
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    // Phương thức in thông tin
    printInfo() {
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
export {};
// Thử thay đổi giá trị readonly (sẽ báo lỗi khi compile)
// v1.id = 202; // Không được phép
//# sourceMappingURL=bai4.js.map