// Lớp cha Employee
class Employee {
    public name: string;         // Ai cũng truy cập được
    protected company: string;   // Chỉ lớp này và lớp con mới truy cập được
    private phone: string;       // Chỉ lớp này mới truy cập được

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}

// Lớp con Manager kế thừa từ Employee
class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone); // Gọi constructor lớp cha
        this.teamSize = teamSize;
    }

    // Ghi đè phương thức printInfo()
    public printInfo(): void {
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
