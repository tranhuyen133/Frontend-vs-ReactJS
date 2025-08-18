// Hàm generic kết hợp 2 object
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Thử nghiệm
const person = { name: "Join" };
const job = { role: "Developer" };

const merged = mergeObjects(person, job);

console.log(merged); // { name: "Join", role: "Developer" }

// TypeScript hiểu rõ kiểu
// merged: { name: string; role: string }
