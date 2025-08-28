import React, { useState, useEffect } from "react";

const BasicForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean>(false);

  // Hàm validate email
  const validateEmail = (email: string) => {
    const regex = /^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  // Kiểm tra dữ liệu real-time
  useEffect(() => {
    if (!name.trim()) {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Trường này là bắt buộc");
    } else if (!validateEmail(email)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }

    setIsValid(!nameError && !emailError && !!name && !!email);
  }, [name, email, nameError, emailError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Form Xác Thực</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ tên */}
        <div>
          <label className="block font-medium mb-1">Họ tên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Nhập họ tên"
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Nhập email"
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        {/* Nút gửi */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded-lg font-semibold ${
            isValid
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
