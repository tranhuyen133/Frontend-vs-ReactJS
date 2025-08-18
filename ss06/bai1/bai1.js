// 1. Abstract class Shape
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    // Phương thức chung
    getName() {
        return this.name;
    }
}
// 2. Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Triển khai phương thức trừu tượng
    getSize() {
        return `Chiều rộng: ${this.width}, Chiều cao: ${this.height}`;
    }
}
// --- Sử dụng ---
const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
console.log("Kích thước:", rect.getSize());
export {};
//# sourceMappingURL=bai1.js.map