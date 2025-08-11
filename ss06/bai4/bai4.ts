// 1. Tạo interface Geometry
interface Geometry {
    calculateArea(): number;       // Tính diện tích
    calculatePerimeter(): number;  // Tính chu vi
}

// 2. Lớp Circle
class Circle implements Geometry {
    constructor(private radius: number) {}

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// 3. Lớp Rectangle
class Rectangle implements Geometry {
    constructor(private width: number, private height: number) {}

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// --- Sử dụng ---
const circle = new Circle(5);
console.log("Hình tròn:");
console.log("  Diện tích:", circle.calculateArea());
console.log("  Chu vi:", circle.calculatePerimeter());

const rectangle = new Rectangle(4, 6);
console.log("Hình chữ nhật:");
console.log("  Diện tích:", rectangle.calculateArea());
console.log("  Chu vi:", rectangle.calculatePerimeter());
