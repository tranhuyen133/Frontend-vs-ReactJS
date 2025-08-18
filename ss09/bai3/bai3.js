// Hàm generic kết hợp 2 object
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// Thử nghiệm
const person = { name: "Join" };
const job = { role: "Developer" };
const merged = mergeObjects(person, job);
console.log(merged); // { name: "Join", role: "Developer" }
export {};
// TypeScript hiểu rõ kiểu
// merged: { name: string; role: string }
//# sourceMappingURL=bai3.js.map