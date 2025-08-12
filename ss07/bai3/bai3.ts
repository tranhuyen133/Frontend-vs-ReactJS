// Lớp trừu tượng Animal
abstract class Animal {
    public name: string; // Tên động vật (ai cũng truy cập được)

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức trừu tượng (lớp con phải tự định nghĩa lại)
    public abstract makeNoise(): void;

    // Phương thức bình thường
    public printName(): void {
        console.log(`Tên: ${this.name}`);
    }
}

// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    public makeNoise(): void {
        console.log("meo meo");
    }
}

// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    public makeNoise(): void {
        console.log("gâu gâu");
    }
}

// --- Sử dụng ---
const myCat = new Cat("Miu Miu");
const myDog = new Dog("Cún Con");

myCat.printName(); // In tên mèo
myCat.makeNoise(); // "meo meo"

myDog.printName(); // In tên chó
myDog.makeNoise(); // "gâu gâu"
