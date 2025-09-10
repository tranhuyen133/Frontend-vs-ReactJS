import React from 'react'
import { useParams } from "react-router-dom";
function ProductDetail() {
     const { id } = useParams<{ id: string }>();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Product Detail</h2>
      <p>ID sản phẩm: <b>{id}</b></p>
    </div>
  )
}

export default ProductDetail
