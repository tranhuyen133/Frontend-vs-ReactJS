var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Lớp trừu tượng Person
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // Phương thức bình thường (có sẵn cài đặt)
    Person.prototype.displayInfo = function () {
        console.log("T\u00EAn: ".concat(this.name));
    };
    return Person;
}());
// Lớp Student kế thừa Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, id) {
        var _this = _super.call(this, name) || this; // Gọi constructor của Person
        _this.id = id;
        return _this;
    }
    // Ghi đè phương thức displayInfo()
    Student.prototype.displayInfo = function () {
        console.log("M\u00E3 SV: ".concat(this.id));
        console.log("T\u00EAn SV: ".concat(this.name));
    };
    return Student;
}(Person));
// Lớp Teacher kế thừa Person
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    // Ghi đè phương thức displayInfo()
    Teacher.prototype.displayInfo = function () {
        console.log("T\u00EAn GV: ".concat(this.name));
        console.log("M\u00F4n d\u1EA1y: ".concat(this.subject));
    };
    return Teacher;
}(Person));
// --- Sử dụng ---
var student = new Student("Nguyễn Văn A", "SV001");
var teacher = new Teacher("Trần Thị B", "Toán");
console.log("=== Thông tin sinh viên ===");
student.displayInfo();
console.log("\n=== Thông tin giáo viên ===");
teacher.displayInfo();
