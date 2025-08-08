// Định nghĩa lớp Vehicle với đóng gói và readonly
var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    // Phương thức in thông tin
    Vehicle.prototype.printInfo = function () {
        console.log("ID: ".concat(this.id));
        console.log("T\u00EAn: ".concat(this.name));
        console.log("N\u0103m s\u1EA3n xu\u1EA5t: ".concat(this.year));
        console.log("H\u00E3ng: ".concat(this.company));
    };
    return Vehicle;
}());
// Tạo một thực thể Vehicle
var v1 = new Vehicle(101, "Camry", 2020, "Toyota");
// In thông tin
v1.printInfo();
// Thử thay đổi giá trị readonly (sẽ báo lỗi khi compile)
// v1.id = 202; // Không được phép
