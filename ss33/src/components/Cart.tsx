import { Table } from "antd";

const Cart = () => {
  const data: any[] = []; // hiện tại giỏ hàng trống

  const columns = [
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
    { title: "Giá", dataIndex: "price", key: "price" },
    { title: "Số lượng", dataIndex: "quantity", key: "quantity" },
    { title: "Thành tiền", dataIndex: "total", key: "total" },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      locale={{ emptyText: "Chưa có sản phẩm trong giỏ hàng" }}
      bordered
    />
  );
};

export default Cart;
