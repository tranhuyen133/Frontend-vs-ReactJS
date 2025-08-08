class Rectangle {
    // Thuộc tính private
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Getter cho width
    public getWidth(): number {
        return this.width;
    }

    // Setter cho width
    public setWidth(width: number): void {
        if (width > 0) {
            this.width = width;
        } else {
            console.log("Chiều rộng phải lớn hơn 0");
        }
    }

    // Getter cho height
    public getHeight(): number {
        return this.height;
    }

    // Setter cho height
    public setHeight(height: number): void {
        if (height > 0) {
            this.height = height;
        } else {
            console.log("Chiều dài phải lớn hơn 0");
        }
    }

    // Tính diện tích
    public getArea(): number {
        return this.width * this.height;
    }

    // Tính chu vi
    public getPerimeter(): number {
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
