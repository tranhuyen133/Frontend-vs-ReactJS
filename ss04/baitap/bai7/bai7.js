function processInput(input) {
    // Nếu input là string
    if (typeof input === "string") {
        // Kiểm tra nếu toàn bộ là số (dùng regex /^[0-9]+$/)
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num); // In ra bình phương
        }
        else {
            // Đếm ký tự chữ cái (bỏ số và ký tự đặc biệt)
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    }
    // Nếu input là number
    else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    // Nếu input là boolean
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
// Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
processInput("123"); // 15129
processInput("abc123!"); // 3 ký tự chữ cái
processInput(7); // Là số nguyên tố
processInput(10); // Không phải số nguyên tố
processInput(true); // Giá trị là true - tiến hành xử lý
processInput(false); // Giá trị là false - dừng xử lý
export {};
//# sourceMappingURL=bai7.js.map