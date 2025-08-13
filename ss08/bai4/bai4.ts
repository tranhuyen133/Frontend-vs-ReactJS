// Hàm generic kết hợp 2 đối tượng
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Thử nghiệm với 2 đối tượng khác kiểu
const person = { name: "Huyền", age: 20 };
const contact = { email: "huyen@example.com", phone: "0123456789" };

const merged = mergeObjects(person, contact);

console.log(merged);
// { name: 'Huyền', age: 20, email: 'huyen@example.com', phone: '0123456789' }
