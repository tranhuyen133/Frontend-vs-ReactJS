// 2. Lớp Vehicle implements ChangeSpeed
class Vehicle {
    speed = 0; // tốc độ ban đầu = 0
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed -= amount;
        if (this.speed < 0)
            this.speed = 0; // không cho tốc độ âm
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Phương tiện đã dừng. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
// 3. Sử dụng lớp Vehicle
const myCar = new Vehicle();
myCar.speedUp(30); // tăng lên 30
myCar.speedUp(20); // tăng thêm 20
myCar.slowDown(15); // giảm 15
myCar.stop(); // dừng hẳn
export {};
//# sourceMappingURL=bai5.js.map