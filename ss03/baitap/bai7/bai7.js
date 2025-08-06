function removeDuplicates(input) {
    var result = "";
    var seen = new Set();
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (!seen.has(char)) {
            result += char;
            seen.add(char);
        }
    }
    return result;
}
var str1 = "banana";
var str2 = "hello world";
console.log("Input: ".concat(str1, " \u2192 Output: ").concat(removeDuplicates(str1)));
console.log("Input: ".concat(str2, " \u2192 Output: ").concat(removeDuplicates(str2)));
