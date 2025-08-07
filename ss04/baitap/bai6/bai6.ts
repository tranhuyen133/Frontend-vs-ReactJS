// Định nghĩa kiểu dữ liệu Product
interface Product {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; 
}

// Hàm tính giá sau giảm
function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}

// Hàm in thông tin sản phẩm
function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name}`);
    console.log(`Mã: ${product.id}`);
    console.log(`Danh mục: ${product.category.name}`);
    console.log(`Giá gốc: ${product.price} VND`);
    if (product.discount) {
        console.log(`Giảm giá: ${product.discount}%`);
        console.log(`Giá sau giảm: ${finalPrice} VND`);
    } else {
        console.log(`Không có khuyến mãi.`);
    }
    console.log('----------------------------');
}

// Danh sách sản phẩm mẫu
const listProduct: Product[] = [
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
