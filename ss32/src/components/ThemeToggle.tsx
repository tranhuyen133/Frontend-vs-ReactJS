import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setTheme } from "../store/themeSlice";

const ThemeToggle: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme(e.target.checked));
  };

  const appStyle: React.CSSProperties = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <h1>{darkMode ? "Chế độ tối" : "Chế độ sáng"}</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
        {darkMode ? "Tối" : "Sáng"}
      </label>
    </div>
  );
};

export default ThemeToggle;
