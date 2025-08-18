class Rectangle {
    // Thuộc tính private
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getter cho width
    getWidth() {
        return this.width;
    }
    // Setter cho width
    setWidth(width) {
        if (width > 0) {
            this.width = width;
        }
        else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }
    // Getter cho height
    getHeight() {
        return this.height;
    }
    // Setter cho height
    setHeight(height) {
        if (height > 0) {
            this.height = height;
        }
        else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }
    // Tính diện tích
    getArea() {
        return this.width * this.height;
    }
    // Tính chu vi
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
// --- Sử dụng ---
const rect = new Rectangle(5, 10);
// In thông tin ban đầu
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Diện tích: ${rect.getArea()}`);
// Cập nhật kích thước
rect.setWidth(8);
rect.setHeight(15);
// In thông tin sau khi cập nhật
console.log("\nSau khi cập nhật:");
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
console.log(`Diện tích: ${rect.getArea()}`);
export {};
//# sourceMappingURL=bai5.js.map