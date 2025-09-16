import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

function Demo() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/products") // đúng endpoint JSON server
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.product_name}</h3>
            <img src={product.image} alt={product.product_name} width={100} />
            <p>Giá: {product.price} USD</p>
            <p>Số lượng: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
