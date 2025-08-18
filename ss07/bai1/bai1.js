// Lớp cha Employee
class Employee {
    name; // Ai cũng truy cập được
    company; // Chỉ lớp này và lớp con mới truy cập được
    phone; // Chỉ lớp này mới truy cập được
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}
// Lớp con Manager kế thừa từ Employee
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone); // Gọi constructor lớp cha
        this.teamSize = teamSize;
    }
    // Ghi đè phương thức printInfo()
    printInfo() {
        super.printInfo(); // Gọi phương thức printInfo() của lớp cha
        console.log(`Số lượng thành viên: ${this.teamSize}`);
    }
}
// --- Sử dụng ---
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
console.log("=== Thông tin Employee ===");
emp.printInfo();
const mgr = new Manager("Trần Thị B", "XYZ Ltd", "0987654321", 5);
console.log("\n=== Thông tin Manager ===");
mgr.printInfo();
export {};
//# sourceMappingURL=bai1.js.map