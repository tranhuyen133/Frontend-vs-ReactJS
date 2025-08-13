// 1. Hàm generic nhận vào một giá trị boolean
function checkBoolean(value) {
    if (value) {
        console.log("Xin chào");
    }
    else {
        console.log("Tạm biệt");
    }
}
// 2. Khai báo biến boolean
var isGreeting = true;
// 3. Gọi hàm generic
checkBoolean(isGreeting);
