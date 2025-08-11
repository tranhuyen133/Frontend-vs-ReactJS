var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Abstract class Shape
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    // Phương thức chung
    Shape.prototype.getName = function () {
        return this.name;
    };
    return Shape;
}());
// 2. Lớp Rectangle kế thừa Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    // Triển khai phương thức trừu tượng
    Rectangle.prototype.getSize = function () {
        return "Chi\u1EC1u r\u1ED9ng: ".concat(this.width, ", Chi\u1EC1u cao: ").concat(this.height);
    };
    return Rectangle;
}(Shape));
// --- Sử dụng ---
var rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
console.log("Kích thước:", rect.getSize());
