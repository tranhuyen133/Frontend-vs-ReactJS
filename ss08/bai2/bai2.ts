// 1. Hàm generic nhận vào một giá trị boolean
function checkBoolean<T extends boolean>(value: T): void {
    if (value) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

// 2. Khai báo biến boolean
let isGreeting: boolean = true;

// 3. Gọi hàm generic
checkBoolean(isGreeting);
