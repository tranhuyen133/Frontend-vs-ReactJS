// Hàm generic với kiểu mặc định là string
function withDefault<T = string>(value?: T): T {
    if (value === undefined) {
        // Ép "default" về kiểu T vì mặc định T là string
        return "default" as T;
    }
    return value;
}

// Thử nghiệm
console.log(withDefault());        // "default"  -> T = string
console.log(withDefault(42));      // 42         -> T = number
console.log(withDefault(true));    // true       -> T = boolean
