// Lớp cha Animal
class Animal {
    private name: string;
    protected age: number;
    public species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public speak(): void {
        console.log(`${this.name} makes a sound.`);
    }

    public getName(): string {
        return this.name;
    }

    public setName(n: string): void {
        this.name = n;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(a: number): void {
        this.age = a;
    }
}


// Lớp Dog kế thừa từ Animal
class Dog extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog");
        this.breed = breed;
    }

    public speak(): void {
        console.log("Woof");
    }
}

// Lớp Cat kế thừa từ Animal
class Cat extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Cat");
        this.breed = breed;
    }

    public speak(): void {
        console.log("Meow");
    }
}

// Lớp Rabbit kế thừa từ Animal
class Rabbit extends Animal {
    public breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Rabbit");
        this.breed = breed;
    }

    public speak(): void {
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
