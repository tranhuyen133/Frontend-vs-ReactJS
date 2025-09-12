import React from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const  products = [
        {
            id:"1",
            name:"Laptop Dell",
            price:35000000
        },
        {
            id:"2",
            name:"iphone 15",
            price:17000000
        },
        {
            id:"3",
            name:"Samsung galaxy",
            price:30000000
        },
        {
            id:"4",
            name:"Airpods Pro 2",
            price:4500000
        }
    ]
  return (
    <div>
      <h3>Danh sach san pham</h3>
      <ul>
        {products.map((products) => (
            <li key={products.id}>
                <b>{products.name}</b> - {products.price.toLocaleString()}VND
                <br />
        <Link to={`/products/${products.id}`}>Xem chi tiết</Link>
            </li>

        ))}
      </ul>
    </div>
  )
}

export default ProductList
