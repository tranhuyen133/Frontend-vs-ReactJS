// Kiểu callback: nhận 1 số nguyên, không trả về gì
type Callback = (value: number) => void;

// Hàm displayNumbers: gọi callback mỗi lần tăng giá trị sau "delay" mili-giây
function displayNumbers(callback: Callback, delay: number): void {
    let count: number = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delay);
}

// Callback để in ra số nguyên
const printNumber: Callback = (value: number): void => {
    console.log("Số:", value);
};

// Gọi hàm với delay 1000ms (1 giây)
displayNumbers(printNumber, 1000);
