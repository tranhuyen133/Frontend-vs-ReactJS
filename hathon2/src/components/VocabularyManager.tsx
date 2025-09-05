//Ma de 009
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Form, Modal, message } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  BookOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import './Vocabulary.css';

interface Vocabulary {
  id: number;
  english: string;
  vietnamese: string;
}

const { confirm } = Modal;

const VocabularyManager: React.FC = () => {
  const [vocabularies, setVocabularies] = useState<Vocabulary[]>([
    { id: 1, english: 'Apple', vietnamese: 'Quả táo' },
    { id: 2, english: 'Book', vietnamese: 'Sách' },
    { id: 3, english: 'Computer', vietnamese: 'Máy tính' },
    { id: 4, english: 'Hello', vietnamese: 'Xin chào' }
  ]);

  const [editingVocab, setEditingVocab] = useState<Vocabulary | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingVocab) {
      form.setFieldsValue({
        english: editingVocab.english,
        vietnamese: editingVocab.vietnamese,
      });
    } else {
      form.resetFields();
    }
  }, [editingVocab, form]);

  const onFinish = (values: { english: string; vietnamese: string }) => {
    const { english, vietnamese } = values;
    const lowerEnglish = english.trim().toLowerCase();

    const isDuplicate = vocabularies.some(v =>
      v.english.toLowerCase() === lowerEnglish &&
      (editingVocab ? v.id !== editingVocab.id : true)
    );

    if (isDuplicate) {
      message.error('Từ tiếng Anh không được trùng lặp');
      return;
    }

    if (editingVocab) {
      setVocabularies(prev =>
        prev.map(v =>
          v.id === editingVocab.id
            ? { ...v, english: english.trim(), vietnamese: vietnamese.trim() }
            : v
        )
      );
      message.success('Cập nhật thành công');
    } else {
      const newId = Math.max(0, ...vocabularies.map(v => v.id)) + 1;
      setVocabularies(prev => [
        ...prev,
        { id: newId, english: english.trim(), vietnamese: vietnamese.trim() }
      ]);
      message.success('Thêm mới thành công');
    }

    setEditingVocab(null);
    form.resetFields();
  };

  const showDeleteConfirm = (vocab: Vocabulary) => {
    confirm({
      title: `Bạn có chắc muốn xóa từ "${vocab.english}" không?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk() {
        setVocabularies(prev => prev.filter(v => v.id !== vocab.id));
        message.success('Xóa thành công');
      }
    });
  };

  const columns = [
    {
      title: 'Từ tiếng Anh',
      dataIndex: 'english',
      key: 'english',
    },
    {
      title: 'Nghĩa tiếng Việt',
      dataIndex: 'vietnamese',
      key: 'vietnamese',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_: any, record: Vocabulary) => (
        <>
          <Button
            className="custom-edit-btn"
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => setEditingVocab(record)}
          >
            Sửa
          </Button>
         <Button
            className="custom-delete-btn"
            icon={<DeleteOutlined />}
            onClick={() => {
              setVocabularies(prev => prev.filter(v => v.id !== record.id));
              message.success('Xóa thành công');
            }}
          >
          Xóa
        </Button>

        </>
      )
    }
  ];

  return (
    <div className="vocab-container">
      <div className="vocab-header">
        <BookOutlined style={{ fontSize: 28 }} />
        Quản Lý Từ Vựng
      </div>

      <div className="vocab-form-box">
        <div className="vocab-section-title">
          <PlusCircleOutlined />
          Thêm từ mới
        </div>
        <Form
          form={form}
          layout="inline"
          onFinish={onFinish}
          style={{ flexWrap: 'wrap' }}
        >
          <Form.Item
            name="english"
            rules={[{ required: true, message: 'Vui lòng nhập từ tiếng Anh!' }]}
          >
            <Input placeholder="Từ tiếng Anh" />
          </Form.Item>

          <Form.Item
            name="vietnamese"
            rules={[{ required: true, message: 'Vui lòng nhập nghĩa tiếng Việt!' }]}
          >
            <Input placeholder="Nghĩa tiếng Việt" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="custom-add-btn" type="primary">
              {editingVocab ? 'Cập nhật' : 'Thêm'}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="vocab-list-box">
        <div className="vocab-section-title">
          <UnorderedListOutlined />
          Danh sách từ vựng
        </div>
        <Table
          columns={columns}
          dataSource={vocabularies}
          rowKey="id"
          pagination={{ pageSize: 4 }}
        />
      </div>
    </div>
  );
};

export default VocabularyManager;
