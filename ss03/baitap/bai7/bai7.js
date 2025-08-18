function removeDuplicates(input) {
    let result = "";
    let seen = new Set();
    for (let char of input) {
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    return result;
}
let str1 = "banana";
let str2 = "hello world";
console.log(`Input: ${str1} → Output: ${removeDuplicates(str1)}`);
console.log(`Input: ${str2} → Output: ${removeDuplicates(str2)}`);
export {};
//# sourceMappingURL=bai7.js.map