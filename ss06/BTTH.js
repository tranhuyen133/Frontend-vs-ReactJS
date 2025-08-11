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
// 2. Abstract class Animal (áp dụng tính trừu tượng)
var Animal = /** @class */ (function () {
    function Animal(name, _age, category, foodType) {
        this.name = name;
        this._age = _age;
        this.category = category;
        this.foodType = foodType;
    }
    Object.defineProperty(Animal.prototype, "age", {
        // Getter & Setter cho age (đóng gói)
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
            else {
                console.log("Tuổi phải lớn hơn 0.");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Phương thức chung
    Animal.prototype.getDetails = function () {
        return "T\u00EAn: ".concat(this.name, ", Tu\u1ED5i: ").concat(this.age, ", Th\u1EC3 lo\u1EA1i: ").concat(this.category, ", Lo\u1EA1i th\u1EE9c \u0103n: ").concat(this.foodType);
    };
    Animal.prototype.feed = function () {
        return "".concat(this.name, " \u0111ang \u0103n ").concat(this.foodType, ".");
    };
    return Animal;
}());
// 3. Lớp Mammal (Thú có vú)
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, category, foodType, _furColor) {
        var _this = _super.call(this, name, age, category, foodType) || this;
        _this._furColor = _furColor;
        return _this;
    }
    Object.defineProperty(Mammal.prototype, "furColor", {
        // Getter & Setter cho furColor
        get: function () {
            return this._furColor;
        },
        set: function (value) {
            this._furColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Mammal.prototype.sound = function () {
        return "".concat(this.name, " ph\u00E1t ra ti\u1EBFng g\u1EA7m ho\u1EB7c k\u00EAu \u0111\u1EB7c tr\u01B0ng.");
    };
    Mammal.prototype.move = function () {
        return "".concat(this.name, " \u0111ang ch\u1EA1y b\u1EB1ng b\u1ED1n ch\u00E2n.");
    };
    return Mammal;
}(Animal));
// 4. Lớp Bird (Chim)
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, category, foodType, _wingSpan) {
        var _this = _super.call(this, name, age, category, foodType) || this;
        _this._wingSpan = _wingSpan;
        return _this;
    }
    Object.defineProperty(Bird.prototype, "wingSpan", {
        // Getter & Setter cho wingSpan
        get: function () {
            return this._wingSpan;
        },
        set: function (value) {
            this._wingSpan = value;
        },
        enumerable: false,
        configurable: true
    });
    Bird.prototype.sound = function () {
        return "".concat(this.name, " h\u00F3t ho\u1EB7c k\u00EAu l\u00EDu lo.");
    };
    Bird.prototype.move = function () {
        return "".concat(this.name, " \u0111ang bay tr\u00EAn b\u1EA7u tr\u1EDDi.");
    };
    return Bird;
}(Animal));
// 5. Lớp Reptile (Bò sát)
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(name, age, category, foodType, _venomous) {
        var _this = _super.call(this, name, age, category, foodType) || this;
        _this._venomous = _venomous;
        return _this;
    }
    Object.defineProperty(Reptile.prototype, "venomous", {
        // Getter & Setter cho venomous
        get: function () {
            return this._venomous;
        },
        set: function (value) {
            this._venomous = value;
        },
        enumerable: false,
        configurable: true
    });
    Reptile.prototype.sound = function () {
        return "".concat(this.name, " ph\u00E1t ra ti\u1EBFng r\u00EDt ho\u1EB7c g\u1EA7m nh\u1ECF.");
    };
    Reptile.prototype.move = function () {
        return "".concat(this.name, " \u0111ang b\u00F2 ch\u1EADm r\u00E3i tr\u00EAn m\u1EB7t \u0111\u1EA5t.");
    };
    return Reptile;
}(Animal));
// 6. Lớp Zookeeper (Người chăm sóc động vật)
var Zookeeper = /** @class */ (function () {
    function Zookeeper() {
    }
    Zookeeper.prototype.careForAnimal = function (animal) {
        console.log("\u0110ang ch\u0103m s\u00F3c ".concat(animal.name, ": t\u1EAFm r\u1EEDa, ki\u1EC3m tra s\u1EE9c kh\u1ECFe."));
    };
    Zookeeper.prototype.report = function (animal) {
        console.log("B\u00E1o c\u00E1o v\u1EC1 ".concat(animal.name, ":"));
        console.log(animal.getDetails());
        console.log("H\u00E0nh vi \u0103n u\u1ED1ng: ".concat(animal.feed()));
        console.log("H\u00E0nh vi di chuy\u1EC3n: ".concat(animal.move()));
    };
    return Zookeeper;
}());
// 7. Sử dụng (Polymorphism)
var animals = [
    new Mammal("Sư tử", 5, "Thú có vú", "ăn thịt", "vàng"),
    new Bird("Đại bàng", 3, "Chim", "ăn thịt", 2.5),
    new Reptile("Rắn hổ mang", 2, "Bò sát", "ăn thịt", true)
];
var zookeeper = new Zookeeper();
// Duyệt mảng và thể hiện đa hình
animals.forEach(function (animal) {
    console.log(animal.sound());
    console.log(animal.move());
});
console.log("\n--- Báo cáo chi tiết ---");
animals.forEach(function (animal) {
    zookeeper.report(animal);
});
