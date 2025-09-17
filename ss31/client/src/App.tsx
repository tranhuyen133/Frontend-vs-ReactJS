import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Tag,
  Image,
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
  ReloadOutlined,
} from "@ant-design/icons";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  image: string;
  content: string;
  created_at: string;
  status: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState<string>("");

  // Fetch posts
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

  // Delete post
  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((p) => p.id !== id));
        message.success("Xóa thành công!");
      })
      .catch(() => message.error("Xóa thất bại"));
  };

  // Toggle status: "Đã xuất bản" ↔ "Ngừng xuất bản"
  const handleToggleStatus = (post: Post) => {
    const newStatus =
      post.status === "Đã xuất bản" ? "Ngừng xuất bản" : "Đã xuất bản";

    axios
      .patch(`http://localhost:5000/posts/${post.id}`, { status: newStatus })
      .then(() => {
        message.success(`Bài viết đã ${newStatus.toLowerCase()}`);
        fetchPosts();
      })
      .catch(() => message.error("Cập nhật trạng thái thất bại"));
  };

  // Open modal add
  const handleOpenAdd = () => {
    setEditingPost(null);
    form.resetFields();
    setPreviewImage("");
    setModalVisible(true);
  };

  // Open modal edit
  const handleOpenEdit = (post: Post) => {
    setEditingPost(post);
    form.setFieldsValue(post);
    setPreviewImage(post.image || "");
    setModalVisible(true);
  };

  // Submit form
  const handleSubmit = (values: Omit<Post, "id" | "created_at" | "status">) => {
    // Check trùng tên khi thêm mới
    const nameExists =
      !editingPost &&
      posts.some(
        (p) => p.title.toLowerCase() === values.title.trim().toLowerCase()
      );

    if (nameExists) {
      message.error("Tên bài viết đã tồn tại!");
      return;
    }

    if (editingPost) {
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
          <Popconfirm
            title={`Bạn có chắc muốn ${
              record.status === "Đã xuất bản" ? "ngừng xuất bản" : "xuất bản"
            } bài viết này?`}
            onConfirm={() => handleToggleStatus(record)}
            okText="Xác nhận"
            cancelText="Hủy"
          >
            <Button
              type={record.status === "Đã xuất bản" ? "default" : "primary"}
              icon={<StopOutlined />}
            >
              {record.status === "Đã xuất bản" ? "Chặn" : "Xuất bản lại"}
            </Button>
          </Popconfirm>

          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleOpenEdit(record)}
          >
            Sửa
          </Button>

          <Popconfirm
            title="Bạn có chắc muốn xóa bài viết này?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger icon={<DeleteOutlined />} />
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
      {/* Thanh công cụ */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleOpenAdd}>
          Thêm mới bài viết
        </Button>
      </Space>

      {/* Bảng dữ liệu */}
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
        open={modalVisible}
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
            <Input
              onChange={(e) => setPreviewImage(e.target.value)}
            />
          </Form.Item>

          {/* Preview hình ảnh */}
          {previewImage && (
            <div style={{ marginBottom: 12 }}>
              <Image src={previewImage} width={120} />
            </div>
          )}

          <Form.Item
            name="content"
            label="Nội dung"
            rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          {/* Nút làm mới */}
          <Button
            type="dashed"
            icon={<ReloadOutlined />}
            onClick={() => {
              Modal.confirm({
                title: "Bạn có chắc muốn làm mới form?",
                onOk: () => {
                  form.resetFields();
                  setPreviewImage("");
                },
              });
            }}
            style={{ marginTop: 8 }}
          >
            Làm mới
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
