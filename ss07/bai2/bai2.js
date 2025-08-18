// Lớp cha Vehicle
class Vehicle {
    name; // Tên phương tiện
    speed; // Tốc độ hiện tại
    id; // Mã định danh
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    // Tăng tốc độ
    speedUp(amount) {
        this.speed += amount;
        console.log(`${this.name} đã tăng tốc thêm ${amount} km/h`);
    }
    // Giảm tốc độ
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // Không cho tốc độ âm
        console.log(`${this.name} đã giảm tốc ${amount} km/h`);
    }
    // Hiển thị tốc độ hiện tại
    showSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
// Lớp con Bicycle kế thừa Vehicle
class Bicycle extends Vehicle {
    gear; // Số bánh răng
    constructor(name, speed, id, gear) {
        super(name, speed, id); // Gọi constructor của Vehicle
        this.gear = gear;
    }
    // Hiển thị thông tin xe đạp
    showInfo() {
        console.log(`Tên xe: ${this.name}`); // name là protected nên dùng được
        console.log(`Mã định danh: ${this.id}`); // id là protected nên dùng được
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
// --- Sử dụng ---
const myBike = new Bicycle("Xe đạp thể thao", 10, "B123", 21);
// Thao tác thay đổi tốc độ
myBike.showSpeed(); // ban đầu
myBike.speedUp(5); // tăng 5
myBike.showSpeed();
myBike.slowDown(8); // giảm 8
myBike.showSpeed();
// In thông tin xe đạp
console.log("\n=== Thông tin xe đạp ===");
myBike.showInfo();
export {};
//# sourceMappingURL=bai2.js.map