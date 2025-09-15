// Định nghĩa kiểu callback: không nhận tham số, không trả về gì
type Callback = () => void;

// Hàm delayedCallback: nhận 1 callback và 1 số nguyên delay (ms)
function delayedCallback(callback: Callback, delay: number): void {
    setTimeout(() => {
        callback();
    }, delay);
}

// Callback ví dụ
const sayHello: Callback = () => {
    console.log("Xin chào! Callback đã được gọi sau delay.");
};

// Gọi hàm delayedCallback với delay 2000ms (2 giây)
delayedCallback(sayHello, 2000);
