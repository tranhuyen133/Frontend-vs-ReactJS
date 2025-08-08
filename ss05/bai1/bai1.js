// Định nghĩa lớp Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    // Phương thức in thông tin
    Vehicle.prototype.printInfo = function () {
        console.log("T\u00EAn: ".concat(this.name, ", N\u0103m s\u1EA3n xu\u1EA5t: ").concat(this.year, ", H\u00E3ng: ").concat(this.company));
    };
    return Vehicle;
}());
// Tạo 2 đối tượng từ lớp Vehicle
var vehicle1 = new Vehicle("Camry", 2020, "Toyota");
var vehicle2 = new Vehicle("Model S", 2023, "Tesla");
// Truy cập và in thông tin
vehicle1.printInfo();
vehicle2.printInfo();
