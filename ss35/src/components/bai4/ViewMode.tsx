// src/components/bai4/ViewMode.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { setListMode, setGridMode } from "../../store/viewSlice";

const ViewMode: React.FC = () => {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch<AppDispatch>();

  const items = [1, 2, 3, 4];

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => dispatch(setListMode())}
          style={{ marginRight: "10px" }}
        >
          List mode
        </button>
        <button onClick={() => dispatch(setGridMode())}>Grid mode</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: mode === "list" ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              background: "firebrick",
              color: "white",
              padding: "20px",
              width: mode === "list" ? "200px" : "80px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMode;
