// Lớp cha Animal
class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    getName() {
        return this.name;
    }
    setName(n) {
        this.name = n;
    }
    getAge() {
        return this.age;
    }
    setAge(a) {
        this.age = a;
    }
}
// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Dog");
        this.breed = breed;
    }
    speak() {
        console.log("Woof");
    }
}
// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Cat");
        this.breed = breed;
    }
    speak() {
        console.log("Meow");
    }
}
// Lớp Rabbit kế thừa từ Animal
class Rabbit extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Rabbit");
        this.breed = breed;
    }
    speak() {
        console.log("Squeak");
    }
}
// --- Sử dụng ---
const dog = new Dog("Buddy", 3, "Golden Retriever");
const cat = new Cat("Mittens", 2, "Siamese");
const rabbit = new Rabbit("Thumper", 1, "Mini Lop");
dog.speak(); // Woof
cat.speak(); // Meow
rabbit.speak(); // Squeak
console.log(`${dog.getName()} - Age: ${dog.getAge()} - Breed: ${dog.breed}`);
dog.setAge(4);
console.log(`After birthday: ${dog.getName()} is now ${dog.getAge()} years old.`);
console.log(`${cat.getName()} - Species: ${cat.species} - Breed: ${cat.breed}`);
export {};
//# sourceMappingURL=BTTH.js.map