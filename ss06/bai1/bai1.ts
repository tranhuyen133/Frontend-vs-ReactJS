// 1. Abstract class Shape
abstract class Shape {
    constructor(protected name: string) {}

    // Phương thức chung
    public getName(): string {
        return this.name;
    }

    // Phương thức trừu tượng (lớp con phải triển khai)
    public abstract getSize(): string;
}

// 2. Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }

    // Triển khai phương thức trừu tượng
    public getSize(): string {
        return `Chiều rộng: ${this.width}, Chiều cao: ${this.height}`;
    }
}

// --- Sử dụng ---
const rect = new Rectangle("Hình chữ nhật", 10, 5);

console.log("Tên hình:", rect.getName());
console.log("Kích thước:", rect.getSize());
