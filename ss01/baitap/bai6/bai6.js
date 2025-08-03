function createUser(name, age = 18, role = "user") {
    return {
        name: name,
        age: age,
        role: role
    };
}

// Test cases
console.log(createUser("Dev"));
// Output: { name: 'Dev', age: 18, role: 'user' }

console.log(createUser("Nguyen Van A", 20, "Admin"));
// Output: { name: 'Nguyen Van A', age: 20, role: 'Admin' }
