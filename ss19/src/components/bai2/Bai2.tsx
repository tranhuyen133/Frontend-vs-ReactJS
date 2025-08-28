import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Định nghĩa type cho Theme
type Theme = "light" | "dark";

// 2. Tạo Context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Tạo Provider
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 4. Hook để dùng dễ hơn
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme phải được dùng trong ThemeProvider");
  return context;
};

// 5. Component con: Header
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border shadow hover:shadow-lg"
      >
        Đổi sang {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

// 6. Component con: Content
const Content: React.FC = () => {
  const { theme } = useTheme();
  return (
    <main className="p-6">
      <p>
        Giao diện hiện tại đang ở chế độ <strong>{theme}</strong>.
      </p>
    </main>
  );
};

// 7. App chính
const Bai2: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default Bai2;
