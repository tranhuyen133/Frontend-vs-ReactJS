import { Layout, Row, Col, Typography } from "antd";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content style={{ padding: "20px" }}>
        <Row gutter={16}>
          {/* Danh sách sản phẩm */}
          <Col xs={24} md={16}>
            <Title level={3}>📦 Sản phẩm</Title>
            <ProductList />
          </Col>

          {/* Giỏ hàng */}
          <Col xs={24} md={8}>
            <Title level={3}>🛒 Giỏ hàng</Title>
            <Cart />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
