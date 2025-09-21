import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => {
  return (
    <Header style={{ background: "#1677ff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Title level={3} style={{ color: "white", margin: 0 }}>
        Shopping Cart
      </Title>
      <div style={{ color: "white", fontWeight: 500 }}>Giỏ hàng: 0</div>
    </Header>
  );
};

export default Navbar;
