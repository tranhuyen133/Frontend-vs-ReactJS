import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Tag,
  Image,
  Select,
  Popconfirm,
  message,
  Modal,
  Form,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  StopOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  image: string;
  created_at: string;
  status: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/posts")
      .then((res) => setPosts(res.data))
      .catch(() => message.error("Không thể tải danh sách"))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((p) => p.id !== id));
        message.success("Xóa thành công!");
      })
      .catch(() => message.error("Xóa thất bại"));
  };

  const handleBlock = (id: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, status: "Đã chặn" } : post
    );
    setPosts(updatedPosts);
    message.warning("Bài viết đã bị chặn!");
  };

  const handleOpenAdd = () => {
    setEditingPost(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleOpenEdit = (post: Post) => {
    setEditingPost(post);
    form.setFieldsValue(post);
    setModalVisible(true);
  };

  const handleSubmit = (values: any) => {
    if (editingPost) {
      // Update
      axios
        .put(`http://localhost:5000/posts/${editingPost.id}`, {
          ...editingPost,
          ...values,
        })
        .then(() => {
          message.success("Cập nhật thành công!");
          fetchPosts();
          setModalVisible(false);
        })
        .catch(() => message.error("Cập nhật thất bại"));
    } else {
      // Add new
      axios
        .post("http://localhost:5000/posts", {
          ...values,
          created_at: new Date().toISOString().split("T")[0],
          status: "Đã xuất bản",
        })
        .then(() => {
          message.success("Thêm mới thành công!");
          fetchPosts();
          setModalVisible(false);
        })
        .catch(() => message.error("Thêm mới thất bại"));
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (_: any, __: Post, index: number) => index + 1,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image: string) =>
        image ? <Image src={image} width={60} /> : "Không có",
    },
    {
      title: "Ngày viết",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "Đã xuất bản" ? (
          <Tag color="green">Đã xuất bản</Tag>
        ) : (
          <Tag color="red">{status}</Tag>
        ),
    },
    {
      title: "Chức năng",
      key: "actions",
      render: (_: any, record: Post) => (
        <Space>
          <Button
            type="default"
            icon={<StopOutlined />}
            onClick={() => handleBlock(record.id)}
          >
            Chặn
          </Button>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleOpenEdit(record)}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Xóa bài viết?"
            onConfirm={() => handleDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger icon={<DeleteOutlined />}>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select defaultValue="all" style={{ width: 150 }}>
          <Select.Option value="all">Lọc bài viết</Select.Option>
          <Select.Option value="published">Đã xuất bản</Select.Option>
          <Select.Option value="blocked">Đã chặn</Select.Option>
        </Select>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleOpenAdd}>
          Thêm mới bài viết
        </Button>
      </Space>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={filteredPosts}
        loading={loading}
        bordered
      />

      {/* Modal Form thêm/sửa */}
      <Modal
        title={editingPost ? "Sửa bài viết" : "Thêm bài viết mới"}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="Tiêu đề"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Link hình ảnh"
            rules={[{ required: true, message: "Vui lòng nhập link hình ảnh" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
