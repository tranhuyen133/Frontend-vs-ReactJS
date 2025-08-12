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
// Lớp trừu tượng Animal
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Phương thức bình thường
    Animal.prototype.printName = function () {
        console.log("T\u00EAn: ".concat(this.name));
    };
    return Animal;
}());
// Lớp Cat kế thừa từ Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("meo meo");
    };
    return Cat;
}(Animal));
// Lớp Dog kế thừa từ Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("gâu gâu");
    };
    return Dog;
}(Animal));
// --- Sử dụng ---
var myCat = new Cat("Miu Miu");
var myDog = new Dog("Cún Con");
myCat.printName(); // In tên mèo
myCat.makeNoise(); // "meo meo"
myDog.printName(); // In tên chó
myDog.makeNoise(); // "gâu gâu"
