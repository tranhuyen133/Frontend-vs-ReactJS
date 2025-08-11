// 2. Lớp Vehicle implements ChangeSpeed
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0; // tốc độ ban đầu = 0
    }
    Vehicle.prototype.speedUp = function (amount) {
        this.speed += amount;
        console.log("T\u0103ng t\u1ED1c th\u00EAm ".concat(amount, " km/h. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ").concat(this.speed, " km/h"));
    };
    Vehicle.prototype.slowDown = function (amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // không cho tốc độ âm
        console.log("Gi\u1EA3m t\u1ED1c ".concat(amount, " km/h. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ").concat(this.speed, " km/h"));
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log("Ph\u01B0\u01A1ng ti\u1EC7n \u0111\u00E3 d\u1EEBng. T\u1ED1c \u0111\u1ED9 hi\u1EC7n t\u1EA1i: ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
// 3. Sử dụng lớp Vehicle
var myCar = new Vehicle();
myCar.speedUp(30); // tăng lên 30
myCar.speedUp(20); // tăng thêm 20
myCar.slowDown(15); // giảm 15
myCar.stop(); // dừng hẳn
