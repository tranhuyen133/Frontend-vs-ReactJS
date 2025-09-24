import React from "react";
import Counter from "./components/bai1/Counter";
import NumberList from "./components/bai2/NumberList";
import ThemeSwitcher from "./components/bai3/ThemeSwitcher";
import ViewMode from "./components/bai4/ViewMode";

const App: React.FC = () => {
  return (
    <>
      <Counter />
      <NumberList />
      <ThemeSwitcher />
      <ViewMode />
    </>
  );
};

export default App;
