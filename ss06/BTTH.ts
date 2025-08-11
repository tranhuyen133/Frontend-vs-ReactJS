// 1. Interface IAnimal
interface IAnimal {
    name: string;
    age: number;
    category: string;
    sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;
}

// 2. Abstract class Animal (áp dụng tính trừu tượng)
abstract class Animal implements IAnimal {
    constructor(
        public name: string,
        private _age: number,
        public category: string,
        public foodType: string
    ) {}

    // Getter & Setter cho age (đóng gói)
    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value > 0) {
            this._age = value;
        } else {
            console.log("Tuổi phải lớn hơn 0.");
        }
    }

    // Phương thức chung
    public getDetails(): string {
        return `Tên: ${this.name}, Tuổi: ${this.age}, Thể loại: ${this.category}, Loại thức ăn: ${this.foodType}`;
    }

    public abstract sound(): string; // bắt buộc lớp con triển khai
    public abstract move(): string;  // bắt buộc lớp con triển khai

    public feed(): string {
        return `${this.name} đang ăn ${this.foodType}.`;
    }
}

// 3. Lớp Mammal (Thú có vú)
class Mammal extends Animal {
    constructor(
        name: string,
        age: number,
        category: string,
        foodType: string,
        private _furColor: string
    ) {
        super(name, age, category, foodType);
    }

    // Getter & Setter cho furColor
    public get furColor(): string {
        return this._furColor;
    }

    public set furColor(value: string) {
        this._furColor = value;
    }

    public sound(): string {
        return `${this.name} phát ra tiếng gầm hoặc kêu đặc trưng.`;
    }

    public move(): string {
        return `${this.name} đang chạy bằng bốn chân.`;
    }
}

// 4. Lớp Bird (Chim)
class Bird extends Animal {
    constructor(
        name: string,
        age: number,
        category: string,
        foodType: string,
        private _wingSpan: number
    ) {
        super(name, age, category, foodType);
    }

    // Getter & Setter cho wingSpan
    public get wingSpan(): number {
        return this._wingSpan;
    }

    public set wingSpan(value: number) {
        this._wingSpan = value;
    }

    public sound(): string {
        return `${this.name} hót hoặc kêu líu lo.`;
    }

    public move(): string {
        return `${this.name} đang bay trên bầu trời.`;
    }
}

// 5. Lớp Reptile (Bò sát)
class Reptile extends Animal {
    constructor(
        name: string,
        age: number,
        category: string,
        foodType: string,
        private _venomous: boolean
    ) {
        super(name, age, category, foodType);
    }

    // Getter & Setter cho venomous
    public get venomous(): boolean {
        return this._venomous;
    }

    public set venomous(value: boolean) {
        this._venomous = value;
    }

    public sound(): string {
        return `${this.name} phát ra tiếng rít hoặc gầm nhỏ.`;
    }

    public move(): string {
        return `${this.name} đang bò chậm rãi trên mặt đất.`;
    }
}

// 6. Lớp Zookeeper (Người chăm sóc động vật)
class Zookeeper {
    public careForAnimal(animal: Animal): void {
        console.log(`Đang chăm sóc ${animal.name}: tắm rửa, kiểm tra sức khỏe.`);
    }

    public report(animal: Animal): void {
        console.log(`Báo cáo về ${animal.name}:`);
        console.log(animal.getDetails());
        console.log(`Hành vi ăn uống: ${animal.feed()}`);
        console.log(`Hành vi di chuyển: ${animal.move()}`);
    }
}

// 7. Sử dụng (Polymorphism)
const animals: Animal[] = [
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
