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
// Lớp cha Animal
var Animal = /** @class */ (function () {
    function Animal(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (n) {
        this.name = n;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.setAge = function (a) {
        this.age = a;
    };
    return Animal;
}());
// Lớp Dog kế thừa từ Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age, "Dog") || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () {
        console.log("Woof");
    };
    return Dog;
}(Animal));
// Lớp Cat kế thừa từ Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, breed) {
        var _this = _super.call(this, name, age, "Cat") || this;
        _this.breed = breed;
        return _this;
    }
    Cat.prototype.speak = function () {
        console.log("Meow");
    };
    return Cat;
}(Animal));
// Lớp Rabbit kế thừa từ Animal
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name, age, breed) {
        var _this = _super.call(this, name, age, "Rabbit") || this;
        _this.breed = breed;
        return _this;
    }
    Rabbit.prototype.speak = function () {
        console.log("Squeak");
    };
    return Rabbit;
}(Animal));
// --- Sử dụng ---
var dog = new Dog("Buddy", 3, "Golden Retriever");
var cat = new Cat("Mittens", 2, "Siamese");
var rabbit = new Rabbit("Thumper", 1, "Mini Lop");
dog.speak(); // Woof
cat.speak(); // Meow
rabbit.speak(); // Squeak
console.log("".concat(dog.getName(), " - Age: ").concat(dog.getAge(), " - Breed: ").concat(dog.breed));
dog.setAge(4);
console.log("After birthday: ".concat(dog.getName(), " is now ").concat(dog.getAge(), " years old."));
console.log("".concat(cat.getName(), " - Species: ").concat(cat.species, " - Breed: ").concat(cat.breed));
