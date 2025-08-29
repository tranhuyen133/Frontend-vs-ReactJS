import React, { useState } from "react";

function UserProfile() {
  // State lưu nhiều trường nhập liệu (name, email)
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // Xử lý khi input thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,   // giữ lại các giá trị cũ
      [name]: value, // cập nhật trường thay đổi
    });
  };

  // Xử lý khi submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tên: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div>
      <h2>Nhập thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên: </label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Gửi</button>
      </form>

      <h3>Thông tin đã nhập:</h3>
      <p>Tên: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default UserProfile;
