var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter cho width
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    // Setter cho width
    Rectangle.prototype.setWidth = function (width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    };
    // Getter cho height
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    // Setter cho height
    Rectangle.prototype.setHeight = function (height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    };
    // Tính diện tích
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    // Tính chu vi
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
// --- Sử dụng ---
var rect = new Rectangle(5, 10);
// In thông tin ban đầu
console.log("Chi\u1EC1u r\u1ED9ng: ".concat(rect.getWidth()));
console.log("Chi\u1EC1u d\u00E0i: ".concat(rect.getHeight()));
console.log("Chu vi: ".concat(rect.getPerimeter()));
console.log("Di\u1EC7n t\u00EDch: ".concat(rect.getArea()));
// Cập nhật kích thước
rect.setWidth(8);
rect.setHeight(15);
// In thông tin sau khi cập nhật
console.log("\nSau khi cập nhật:");
console.log("Chi\u1EC1u r\u1ED9ng: ".concat(rect.getWidth()));
console.log("Chi\u1EC1u d\u00E0i: ".concat(rect.getHeight()));
console.log("Chu vi: ".concat(rect.getPerimeter()));
console.log("Di\u1EC7n t\u00EDch: ".concat(rect.getArea()));
