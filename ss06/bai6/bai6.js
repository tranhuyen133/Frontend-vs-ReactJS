// Lớp Student
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Getter để lấy thông tin
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// Mảng chứa tất cả học sinh chưa vào lớp
let allStudents = [];
// Lớp Classroom
class Classroom {
    students = [];
    showStudents() {
        console.log("Danh sách học sinh trong lớp:");
        if (this.students.length === 0) {
            console.log("Không có học sinh nào.");
            return;
        }
        this.students.forEach(s => console.log(s.getInfo()));
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(s => s.getId() === id);
    }
    addStudentInClass(studentId) {
        const index = allStudents.findIndex(s => s.getId() === studentId);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1); // Xóa khỏi allStudents
        }
        else {
            console.log(`Không tìm thấy học sinh ID: ${studentId} trong danh sách tất cả học sinh.`);
        }
    }
}
// --- Sử dụng ---
// 1. Tạo 6 học sinh và thêm vào mảng allStudents
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Lan"));
// 2. Tạo 2 lớp học
const classA = new Classroom();
const classB = new Classroom();
// 3. Mỗi lớp thêm 3 học sinh từ allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
// 4. In danh sách học sinh từng lớp
console.log("\n--- Lớp A ---");
classA.showStudents();
console.log("\n--- Lớp B ---");
classB.showStudents();
console.log("\n--- Danh sách học sinh còn lại trong allStudents ---");
console.log(allStudents);
export {};
//# sourceMappingURL=bai6.js.map