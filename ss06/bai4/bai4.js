// 2. Lớp Circle
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
// 3. Lớp Rectangle
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
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
export {};
//# sourceMappingURL=bai4.js.map