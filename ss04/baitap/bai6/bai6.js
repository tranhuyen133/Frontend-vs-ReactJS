// Hàm tính giá sau giảm
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}
// Hàm in thông tin sản phẩm
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("S\u1EA3n ph\u1EA9m: ".concat(product.name));
    console.log("M\u00E3: ".concat(product.id));
    console.log("Danh m\u1EE5c: ".concat(product.category.name));
    console.log("Gi\u00E1 g\u1ED1c: ".concat(product.price, " VND"));
    if (product.discount) {
        console.log("Gi\u1EA3m gi\u00E1: ".concat(product.discount, "%"));
        console.log("Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice, " VND"));
    }
    else {
        console.log("Kh\u00F4ng c\u00F3 khuy\u1EBFn m\u00E3i.");
    }
    console.log('----------------------------');
}
// Danh sách sản phẩm mẫu
var listProduct = [
    {
        id: "P001",
        name: "Áo Thun Nam",
        price: 250000,
        category: {
            id: "C01",
            name: "Thời Trang"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Tai Nghe Bluetooth",
        price: 650000,
        category: {
            id: "C02",
            name: "Phụ Kiện"
        }
    },
    {
        id: "P003",
        name: "Giày Sneaker",
        price: 1200000,
        category: {
            id: "C01",
            name: "Thời Trang"
        },
        discount: 15
    }
];
listProduct.forEach(printProductInfo);
