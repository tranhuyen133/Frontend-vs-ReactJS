// 1. Tạo interface changeSpeed
interface ChangeSpeed {
    speedUp(amount: number): void;  // Tăng tốc
    slowDown(amount: number): void; // Giảm tốc
    stop(): void;                   // Dừng
}

// 2. Lớp Vehicle implements ChangeSpeed
class Vehicle implements ChangeSpeed {
    private speed: number = 0; // tốc độ ban đầu = 0

    public speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc thêm ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; // không cho tốc độ âm
        console.log(`Giảm tốc ${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    public stop(): void {
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
