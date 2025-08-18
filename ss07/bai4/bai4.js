// Lớp trừu tượng Person
class Person {
    name; // Tên của người
    constructor(name) {
        this.name = name;
    }
    // Phương thức bình thường (có sẵn cài đặt)
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
// Lớp Student kế thừa Person
class Student extends Person {
    id; // Mã sinh viên
    constructor(name, id) {
        super(name); // Gọi constructor của Person
        this.id = id;
    }
    // Ghi đè phương thức displayInfo()
    displayInfo() {
        console.log(`Mã SV: ${this.id}`);
        console.log(`Tên SV: ${this.name}`);
    }
}
// Lớp Teacher kế thừa Person
class Teacher extends Person {
    subject; // Môn học giảng dạy
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    // Ghi đè phương thức displayInfo()
    displayInfo() {
        console.log(`Tên GV: ${this.name}`);
        console.log(`Môn dạy: ${this.subject}`);
    }
}
// --- Sử dụng ---
const student = new Student("Nguyễn Văn A", "SV001");
const teacher = new Teacher("Trần Thị B", "Toán");
console.log("=== Thông tin sinh viên ===");
student.displayInfo();
console.log("\n=== Thông tin giáo viên ===");
teacher.displayInfo();
export {};
//# sourceMappingURL=bai4.js.map