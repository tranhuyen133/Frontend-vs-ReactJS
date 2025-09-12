import React from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const products = [
    { id: "1", name: "Laptop Dell", price: 35000000 },
    { id: "2", name: "iPhone 15", price: 17000000 },
    { id: "3", name: "Samsung Galaxy", price: 30000000 },
    { id: "4", name: "AirPods Pro 2", price: 4500000 }
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
  return <h2>Không tìm thấy sản phẩm!</h2>;
}
  return (
    <div>
      <h2>{product?.name}</h2>
      <p><b>Giá: </b>{product?.price.toLocaleString()} VND</p>
      <br />
      <Link to="/products">Quay lại</Link>
    </div>
  )
}

export default ProductDetail
