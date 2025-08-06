function removeDuplicates(input: string): string {
  let result = "";
  let seen = new Set<string>();

  for (let char of input) {
    if (!seen.has(char)) {
      result += char;
      seen.add(char);
    }
  }

  return result;
}

let str1: string = "banana";
let str2: string = "hello world";

console.log(`Input: ${str1} → Output: ${removeDuplicates(str1)}`);
console.log(`Input: ${str2} → Output: ${removeDuplicates(str2)}`);
