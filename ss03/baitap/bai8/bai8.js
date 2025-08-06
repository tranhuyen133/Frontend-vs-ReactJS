function toNumber(value) {
    var num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? NaN : num;
}
// Hàm cộng
function add(a, b) {
    var num1 = toNumber(a);
    var num2 = toNumber(b);
    return isNaN(num1) || isNaN(num2) ? "Input không hợp lệ" : num1 + num2;
}
// Hàm trừ
function subtract(a, b) {
    var num1 = toNumber(a);
    var num2 = toNumber(b);
    return isNaN(num1) || isNaN(num2) ? "Input không hợp lệ" : num1 - num2;
}
// Hàm nhân
function multiply(a, b) {
    var num1 = toNumber(a);
    var num2 = toNumber(b);
    return isNaN(num1) || isNaN(num2) ? "Input không hợp lệ" : num1 * num2;
}
// Hàm chia
function divide(a, b) {
    var num1 = toNumber(a);
    var num2 = toNumber(b);
    if (isNaN(num1) || isNaN(num2))
        return "Input không hợp lệ";
    if (num2 === 0)
        return "Không thể chia cho 0";
    return num1 / num2;
}
console.log("Cộng:", add("10", 5)); // 15
console.log("Trừ:", subtract("20", "3")); // 17
console.log("Nhân:", multiply(4, "5")); // 20
console.log("Chia:", divide("100", 0)); // Không thể chia cho 0
console.log("Sai kiểu:", add("abc", 5)); // Input không hợp lệ
