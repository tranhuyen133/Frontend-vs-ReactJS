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
// Lớp cha Employee
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("T\u00EAn: ".concat(this.name));
        console.log("C\u00F4ng ty: ".concat(this.company));
        console.log("S\u0110T: ".concat(this.phone));
    };
    return Employee;
}());
// Lớp con Manager kế thừa từ Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, company, phone, teamSize) {
        var _this = _super.call(this, name, company, phone) || this; // Gọi constructor lớp cha
        _this.teamSize = teamSize;
        return _this;
    }
    // Ghi đè phương thức printInfo()
    Manager.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this); // Gọi phương thức printInfo() của lớp cha
        console.log("S\u1ED1 l\u01B0\u1EE3ng th\u00E0nh vi\u00EAn: ".concat(this.teamSize));
    };
    return Manager;
}(Employee));
// --- Sử dụng ---
var emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
console.log("=== Thông tin Employee ===");
emp.printInfo();
var mgr = new Manager("Trần Thị B", "XYZ Ltd", "0987654321", 5);
console.log("\n=== Thông tin Manager ===");
mgr.printInfo();
