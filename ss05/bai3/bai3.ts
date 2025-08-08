// Định nghĩa lớp Employee
class Employee {
    public name: string;        // Ai cũng truy cập được
    protected company: string;  // Chỉ trong class này và class con mới truy cập được
    private phone: string;      // Chỉ trong chính class này mới truy cập được

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    // Phương thức in thông tin
    public printInfo(): void {
        console.log(`Tên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`SĐT: ${this.phone}`);
    }
}

// Tạo một thực thể Employee
const emp = new Employee("Nguyễn Văn A", "TechCorp", "0901234567");

// Gọi phương thức để in ra tất cả thuộc tính
emp.printInfo();
