// 2. Abstract class Animal (áp dụng tính trừu tượng)
class Animal {
    name;
    _age;
    category;
    foodType;
    constructor(name, _age, category, foodType) {
        this.name = name;
        this._age = _age;
        this.category = category;
        this.foodType = foodType;
    }
    // Getter & Setter cho age (đóng gói)
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
        else {
            console.log("Tuổi phải lớn hơn 0.");
        }
    }
    // Phương thức chung
    getDetails() {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}, Loại thức ăn: ${this.foodType}`;
    }
    feed() {
        return `${this.name} đang ăn ${this.foodType}.`;
    }
}
// 3. Lớp Mammal (Thú có vú)
class Mammal extends Animal {
    _furColor;
    constructor(name, age, category, foodType, _furColor) {
        super(name, age, category, foodType);
        this._furColor = _furColor;
    }
    // Getter & Setter cho furColor
    get furColor() {
        return this._furColor;
    }
    set furColor(value) {
        this._furColor = value;
    }
    sound() {
        return `${this.name} phát ra tiếng gầm hoặc kêu đặc trưng.`;
    }
    move() {
        return `${this.name} đang chạy bằng bốn chân.`;
    }
}
// 4. Lớp Bird (Chim)
class Bird extends Animal {
    _wingSpan;
    constructor(name, age, category, foodType, _wingSpan) {
        super(name, age, category, foodType);
        this._wingSpan = _wingSpan;
    }
    // Getter & Setter cho wingSpan
    get wingSpan() {
        return this._wingSpan;
    }
    set wingSpan(value) {
        this._wingSpan = value;
    }
    sound() {
        return `${this.name} hót hoặc kêu líu lo.`;
    }
    move() {
        return `${this.name} đang bay trên bầu trời.`;
    }
}
// 5. Lớp Reptile (Bò sát)
class Reptile extends Animal {
    _venomous;
    constructor(name, age, category, foodType, _venomous) {
        super(name, age, category, foodType);
        this._venomous = _venomous;
    }
    // Getter & Setter cho venomous
    get venomous() {
        return this._venomous;
    }
    set venomous(value) {
        this._venomous = value;
    }
    sound() {
        return `${this.name} phát ra tiếng rít hoặc gầm nhỏ.`;
    }
    move() {
        return `${this.name} đang bò chậm rãi trên mặt đất.`;
    }
}
// 6. Lớp Zookeeper (Người chăm sóc động vật)
class Zookeeper {
    careForAnimal(animal) {
        console.log(`Đang chăm sóc ${animal.name}: tắm rửa, kiểm tra sức khỏe.`);
    }
    report(animal) {
        console.log(`Báo cáo về ${animal.name}:`);
        console.log(animal.getDetails());
        console.log(`Hành vi ăn uống: ${animal.feed()}`);
        console.log(`Hành vi di chuyển: ${animal.move()}`);
    }
}
// 7. Sử dụng (Polymorphism)
const animals = [
    new Mammal("Sư tử", 5, "Thú có vú", "ăn thịt", "vàng"),
    new Bird("Đại bàng", 3, "Chim", "ăn thịt", 2.5),
    new Reptile("Rắn hổ mang", 2, "Bò sát", "ăn thịt", true)
];
const zookeeper = new Zookeeper();
// Duyệt mảng và thể hiện đa hình
animals.forEach(animal => {
    console.log(animal.sound());
    console.log(animal.move());
});
console.log("\n--- Báo cáo chi tiết ---");
animals.forEach(animal => {
    zookeeper.report(animal);
});
export {};
//# sourceMappingURL=BTTH.js.map