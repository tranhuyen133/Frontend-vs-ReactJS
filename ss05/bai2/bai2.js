// Định nghĩa lớp Student
var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    // Phương thức in thông tin sinh viên
    Student.prototype.printInfo = function () {
        console.log("ID: ".concat(this.id, ", Tu\u1ED5i: ").concat(this.age, ", Email: ").concat(this.email));
    };
    return Student;
}());
// Khai báo mảng chứa các sinh viên
var students = [];
// Tạo các thực thể sinh viên và lưu vào mảng
students.push(new Student(1, 20, "huy@example.com"));
students.push(new Student(2, 21, "lan@example.com"));
students.push(new Student(3, 19, "minh@example.com"));
// Duyệt mảng và in ra thông tin sinh viên
console.log("Danh sách sinh viên:");
students.forEach(function (student) { return student.printInfo(); });
