import React, { useState } from "react";

interface FormState {
  content: string;
  name: string;
  age: number;
}

function Form() {
  const [form, setForm] = useState<FormState>({
    content: "",
    name: "",
    age: 0,
  });

  // Hàm dùng chung cho tất cả input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value, // ép kiểu age sang number
    }));
  };

  return (
    <div>
      <input
        name="content"
        placeholder="nhập nội dung"
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="nhập tên"
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="nhập tuổi"
        type="number"
        onChange={handleChange}
      />

      <p> Nội dung: {form.content}</p>
      <p> Tên: {form.name}</p>
      <p> Tuổi: {form.age}</p>
    </div>
  );
}

export default Form;
