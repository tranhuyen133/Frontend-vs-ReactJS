// Hàm generic đưa giá trị vào mảng
function wrapInArray(value) {
    return [value];
}
// Thử nghiệm
console.log(wrapInArray(5)); // [5]
console.log(wrapInArray("hello")); // ["hello"]
console.log(wrapInArray({ a: 1 })); // [{ a: 1 }]
// TypeScript tự suy luận kiểu
const numArray = wrapInArray(5); // number[]
const strArray = wrapInArray("hello"); // string[]
const objArray = wrapInArray({ a: 1 }); // { a: number }[]
export {};
//# sourceMappingURL=bai2.js.map