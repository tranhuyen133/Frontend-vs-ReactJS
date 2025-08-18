// Hàm generic với kiểu mặc định là string
function withDefault(value) {
    if (value === undefined) {
        // Ép "default" về kiểu T vì mặc định T là string
        return "default";
    }
    return value;
}
// Thử nghiệm
console.log(withDefault()); // "default"  -> T = string
console.log(withDefault(42)); // 42         -> T = number
console.log(withDefault(true)); // true       -> T = boolean
export {};
//# sourceMappingURL=bai4.js.map