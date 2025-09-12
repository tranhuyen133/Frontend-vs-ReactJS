interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; 
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
    image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-pro.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
    image: "https://cdn.tgdd.vn/Products/Images/42/305658/samsung-galaxy-s23-ultra.jpg"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
    image: "https://cdn.tgdd.vn/Products/Images/44/299250/macbook-air-m2.jpg"
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
    image: "https://cdn.tgdd.vn/Products/Images/44/305661/dell-xps-13.jpg"
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
    image: "https://cdn.tgdd.vn/Products/Images/522/307242/ipad-pro-129.jpg"
  }
];
