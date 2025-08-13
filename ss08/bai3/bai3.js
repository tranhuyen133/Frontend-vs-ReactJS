// Hàm generic đảo ngược mảng bất kỳ
function reverseArray(arr) {
    return arr.slice().reverse(); // slice() để không thay đổi mảng gốc
}
// Thử nghiệm với mảng số
var numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // [5, 4, 3, 2, 1]
// Thử nghiệm với mảng chuỗi
var strings = ["A", "B", "C", "D"];
console.log(reverseArray(strings)); // ["D", "C", "B", "A"]
// Thử nghiệm với mảng boolean
var booleans = [true, false, true];
console.log(reverseArray(booleans)); // [true, false, true]
