// 2. Lớp Circle
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
// 3. Lớp Rectangle
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
// --- Sử dụng ---
var circle = new Circle(5);
console.log("Hình tròn:");
console.log("  Diện tích:", circle.calculateArea());
console.log("  Chu vi:", circle.calculatePerimeter());
var rectangle = new Rectangle(4, 6);
console.log("Hình chữ nhật:");
console.log("  Diện tích:", rectangle.calculateArea());
console.log("  Chu vi:", rectangle.calculatePerimeter());
