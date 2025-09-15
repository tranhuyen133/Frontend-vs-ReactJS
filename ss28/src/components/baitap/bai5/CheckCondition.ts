// Định nghĩa kiểu callback: nhận vào giá trị boolean, không trả về gì
type Callback = (result: boolean) => void;

// Hàm checkCondition: kiểm tra điều kiện sau 1 giây
function checkCondition(condition: boolean, callback: Callback): void {
    setTimeout(() => {
        callback(condition);
    }, 1000); // 1 giây
}

// Callback để in kết quả nếu đúng
const printTrue: Callback = (result: boolean): void => {
    if (result) {
        console.log("Điều kiện đúng ✅");
    } else {
        console.log("Điều kiện sai ❌");
    }
};

// Gọi thử
checkCondition(true, printTrue);   // Sau 1s: Điều kiện đúng ✅
checkCondition(false, printTrue);  // Sau 1s: Điều kiện sai ❌
