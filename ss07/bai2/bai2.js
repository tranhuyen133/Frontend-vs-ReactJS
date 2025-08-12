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
// Lớp cha Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    // Tăng tốc độ
    Vehicle.prototype.speedUp = function (amount) {
        this.speed += amount;
        console.log("".concat(this.name, " \u0111\u00E3 t\u0103ng t\u1ED1c th\u00EAm ").concat(amount, " km/h"));
    };
    // Giảm tốc độ
    Vehicle.prototype.slowDown = function (amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // Không cho tốc độ âm
        console.log("".concat(this.name, " \u0111\u00E3 gi\u1EA3m t\u1ED1c ").concat(amount, " km/h"));
    };
    // Hiển thị tốc độ hiện tại
    Vehicle.prototype.showSpeed = function () {
        console.log("T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
// Lớp con Bicycle kế thừa Vehicle
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, speed, id, gear) {
        var _this = _super.call(this, name, speed, id) || this; // Gọi constructor của Vehicle
        _this.gear = gear;
        return _this;
    }
    // Hiển thị thông tin xe đạp
    Bicycle.prototype.showInfo = function () {
        console.log("T\u00EAn xe: ".concat(this.name)); // name là protected nên dùng được
        console.log("M\u00E3 \u0111\u1ECBnh danh: ".concat(this.id)); // id là protected nên dùng được
        console.log("T\u1ED1c \u0111\u1ED9: ".concat(this.speed, " km/h"));
        console.log("S\u1ED1 b\u00E1nh r\u0103ng: ".concat(this.gear));
    };
    return Bicycle;
}(Vehicle));
// --- Sử dụng ---
var myBike = new Bicycle("Xe đạp thể thao", 10, "B123", 21);
// Thao tác thay đổi tốc độ
myBike.showSpeed(); // ban đầu
myBike.speedUp(5); // tăng 5
myBike.showSpeed();
myBike.slowDown(8); // giảm 8
myBike.showSpeed();
// In thông tin xe đạp
console.log("\n=== Thông tin xe đạp ===");
myBike.showInfo();
