// Kiểu dữ liệu cho từng sản phẩm trong đơn hàng
interface OrderItem {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
}

// Kiểu dữ liệu cho đơn hàng
interface Order {
    readonly orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string; // optional
}

// Hàm tính tổng giá t
// \rị đơn hàng
function calculateOrderTotal(order: Order): number {
    return order.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Hàm in thông tin đơn hàng
function printOrder(order: Order): void {
    console.log(` Đơn hàng: ${order.orderId}`);
    console.log(` Khách hàng: ${order.customerName}`);
    console.log(` Danh sách sản phẩm:`);

    order.items.forEach((item, index) => {
        console.log(
            `  ${index + 1}. ${item.productName} - ${item.quantity} x ${item.price} = ${
                item.quantity * item.price
            }`
        );
    });

    const total = calculateOrderTotal(order);
    console.log(` Tổng tiền: ${total} VND`);

    if (order.note) {
        console.log(` Ghi chú: ${order.note}`);
    }

    console.log("================================");
}

const exampleOrder: Order = {
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
