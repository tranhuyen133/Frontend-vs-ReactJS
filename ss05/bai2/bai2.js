// Định nghĩa lớp Student
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    // Phương thức in thông tin sinh viên
    printInfo() {
        console.log(`ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`);
    }
}
// Khai báo mảng chứa các sinh viên
let students = [];
// Tạo các thực thể sinh viên và lưu vào mảng
students.push(new Student(1, 20, "huy@example.com"));
students.push(new Student(2, 21, "lan@example.com"));
students.push(new Student(3, 19, "minh@example.com"));
// Duyệt mảng và in ra thông tin sinh viên
console.log("Danh sách sinh viên:");
students.forEach(student => student.printInfo());
export {};
//# sourceMappingURL=bai2.js.map