// Lớp trừu tượng Animal
class Animal {
    name; // Tên động vật (ai cũng truy cập được)
    constructor(name) {
        this.name = name;
    }
    // Phương thức bình thường
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    makeNoise() {
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
export {};
//# sourceMappingURL=bai3.js.map