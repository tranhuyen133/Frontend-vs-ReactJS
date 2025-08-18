// Hàm generic kết hợp 2 đối tượng
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// Thử nghiệm với 2 đối tượng khác kiểu
const person = { name: "Huyền", age: 20 };
const contact = { email: "huyen@example.com", phone: "0123456789" };
const merged = mergeObjects(person, contact);
console.log(merged);
export {};
// { name: 'Huyền', age: 20, email: 'huyen@example.com', phone: '0123456789' }
//# sourceMappingURL=bai4.js.map