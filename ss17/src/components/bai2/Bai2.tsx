import { useState } from "react";

function ProductState() {
  // Tạo state với giá trị khởi tạo là 1 object product
  const [product] = useState({
    id: 1,
    name: "Laptop Dell",
    price: 1500,
    quantity: 2,
  });

  return (
    <>
      <h3>ProductState Component</h3>
      <p>Tên sản phẩm: {product.name}</p>
    </>
  );
}

export default ProductState;
