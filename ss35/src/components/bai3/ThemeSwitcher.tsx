// src/components/bai3/ThemeSwitcher.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { toggleTheme } from "../../store/themeSlice";

const ThemeSwitcher: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        backgroundColor: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.3s ease",
      }}
    >
      <h1>{darkMode ? "Chế độ tối 🌙" : "Chế độ sáng ☀️"}</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          background: darkMode ? "#fff" : "#333",
          color: darkMode ? "#333" : "#fff",
        }}
      >
        Đổi chế độ
      </button>
    </div>
  );
};

export default ThemeSwitcher;
