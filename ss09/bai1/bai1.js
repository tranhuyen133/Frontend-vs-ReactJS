// Hàm generic trả về chính giá trị truyền vào
function identity(value) {
    return value;
}
// Thử nghiệm
console.log(identity(5)); // 5
console.log(identity("hello")); // hello
console.log(identity({ a: 1 })); // { a: 1 }
// TypeScript hiểu kiểu dữ liệu
const num = identity(5); // num: number
const str = identity("hello"); // str: string
const obj = identity({ a: 1 }); // obj: { a: number }
export {};
//# sourceMappingURL=bai1.js.map