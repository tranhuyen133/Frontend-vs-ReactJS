// Định nghĩa lớp Employee
class Employee {
    name; // Ai cũng truy cập được
    company; // Chỉ trong class này và class con mới truy cập được
    phone; // Chỉ trong chính class này mới truy cập được
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Phương thức in thông tin
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}
// Tạo một thực thể Employee
const emp = new Employee("Nguyễn Văn A", "TechCorp", "0901234567");
// Gọi phương thức để in ra tất cả thuộc tính
emp.printInfo();
export {};
//# sourceMappingURL=bai3.js.map