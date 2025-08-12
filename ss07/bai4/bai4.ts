// Lớp trừu tượng Person
abstract class Person {
    public name: string; // Tên của người

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức bình thường (có sẵn cài đặt)
    public displayInfo(): void {
        console.log(`Tên: ${this.name}`);
    }
}

// Lớp Student kế thừa Person
class Student extends Person {
    private id: string; // Mã sinh viên

    constructor(name: string, id: string) {
        super(name); // Gọi constructor của Person
        this.id = id;
    }

    // Ghi đè phương thức displayInfo()
    public override displayInfo(): void {
        console.log(`Mã SV: ${this.id}`);
        console.log(`Tên SV: ${this.name}`);
    }
}

// Lớp Teacher kế thừa Person
class Teacher extends Person {
    private subject: string; // Môn học giảng dạy

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    // Ghi đè phương thức displayInfo()
    public override displayInfo(): void {
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
