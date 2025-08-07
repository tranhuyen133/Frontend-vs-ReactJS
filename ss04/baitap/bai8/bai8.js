// Hàm tính tổng giá trị đơn hàng
function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);
}
// Hàm in thông tin đơn hàng
function printOrder(order) {
    console.log(" \u0110\u01A1n h\u00E0ng: ".concat(order.orderId));
    console.log(" Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log(" Danh s\u00E1ch s\u1EA3n ph\u1EA9m:");
    order.items.forEach(function (item, index) {
        console.log("  ".concat(index + 1, ". ").concat(item.productName, " - ").concat(item.quantity, " x ").concat(item.price, " = ").concat(item.quantity * item.price));
    });
    var total = calculateOrderTotal(order);
    console.log(" T\u1ED5ng ti\u1EC1n: ".concat(total, " VND"));
    if (order.note) {
        console.log(" Ghi ch\u00FA: ".concat(order.note));
    }
    console.log("================================");
}
var exampleOrder = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            productId: "P001",
            productName: "Chuột không dây",
            price: 200000,
            quantity: 2,
        },
        {
            productId: "P002",
            productName: "Bàn phím cơ",
            price: 850000,
            quantity: 1,
        },
    ],
    note: "Giao hàng trong giờ hành chính.",
};
printOrder(exampleOrder);
