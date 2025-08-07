// Định nghĩa hàm nhận tham số có kiểu string hoặc number
function handleUnionType(value) {
    if (typeof value === "string") {
        // Nếu là chuỗi, in ra số ký tự
        console.log("".concat(value.length, " k\u00FD t\u1EF1"));
    }
    else if (typeof value === "number") {
        // Nếu là số, kiểm tra chẵn/lẻ
        if (value % 2 === 0) {
            console.log("Đây là số chẵn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
    else {
        console.log("Kiểu dữ liệu không hợp lệ");
    }
}
// Gọi thử hàm với cả hai kiểu
handleUnionType("demo123"); // 7 ký tự
handleUnionType(10); // Đây là số chẵn
handleUnionType(9); // Đây là số lẻ
