// Định nghĩa lớp Employee
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    // Phương thức in thông tin
    Employee.prototype.printInfo = function () {
        console.log("T\u00EAn: ".concat(this.name));
        console.log("C\u00F4ng ty: ".concat(this.company));
        console.log("S\u0110T: ".concat(this.phone));
    };
    return Employee;
}());
// Tạo một thực thể Employee
var emp = new Employee("Nguyễn Văn A", "TechCorp", "0901234567");
// Gọi phương thức để in ra tất cả thuộc tính
emp.printInfo();
