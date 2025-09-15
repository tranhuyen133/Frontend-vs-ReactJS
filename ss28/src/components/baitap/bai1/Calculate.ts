// Định nghĩa kiểu cho callback function
type Callback = (result: number) => void;

// Hàm calculate: nhận 2 số nguyên và 1 callback
function calculate(a: number, b: number, callback: Callback): void {
    const sum: number = a + b;
    callback(sum); // gọi callback với kết quả
}

// Định nghĩa 1 callback để in kết quả ra console
const printResult: Callback = (result: number): void => {
    console.log("Kết quả phép tính là:", result);
};

// Gọi thử hàm calculate
calculate(10, 20, printResult);  // In ra: Kết quả phép tính là: 30
