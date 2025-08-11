// Lớp Student
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    // Getter để lấy thông tin
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Student;
}());
// Mảng chứa tất cả học sinh chưa vào lớp
var allStudents = [];
// Lớp Classroom
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        console.log("Danh sách học sinh trong lớp:");
        if (this.students.length === 0) {
            console.log("Không có học sinh nào.");
            return;
        }
        this.students.forEach(function (s) { return console.log(s.getInfo()); });
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.filter(function (s) { return s.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (studentId) {
        var index = allStudents.findIndex(function (s) { return s.getId() === studentId; });
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1); // Xóa khỏi allStudents
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh ID: ".concat(studentId, " trong danh s\u00E1ch t\u1EA5t c\u1EA3 h\u1ECDc sinh."));
        }
    };
    return Classroom;
}());
// --- Sử dụng ---
// 1. Tạo 6 học sinh và thêm vào mảng allStudents
allStudents.push(new Student(1, "An"), new Student(2, "Bình"), new Student(3, "Chi"), new Student(4, "Dũng"), new Student(5, "Hà"), new Student(6, "Lan"));
// 2. Tạo 2 lớp học
var classA = new Classroom();
var classB = new Classroom();
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
