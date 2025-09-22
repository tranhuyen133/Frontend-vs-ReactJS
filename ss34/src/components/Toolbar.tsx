// src/components/Toolbar.tsx
import { Button, TextField, MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface ToolbarProps {
  onSearch: (keyword: string) => void;
  onSort: (field: "fullName" | "age", order: "asc" | "desc") => void;
  onAdd: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch, onSort, onAdd }) => {
  const [keyword, setKeyword] = useState("");
  const [field, setField] = useState<"fullName" | "age">("fullName");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Ô tìm kiếm */}
      <TextField
        label="Tìm kiếm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(keyword)}
      />
      <Button variant="outlined" onClick={() => onSearch(keyword)}>
        Tìm
      </Button>

      {/* Sắp xếp */}
      <Select value={field} onChange={(e) => setField(e.target.value as "fullName" | "age")}>
        <MenuItem value="fullName">Tên</MenuItem>
        <MenuItem value="age">Tuổi</MenuItem>
      </Select>
      <Select value={order} onChange={(e) => setOrder(e.target.value as "asc" | "desc")}>
        <MenuItem value="asc">Tăng dần</MenuItem>
        <MenuItem value="desc">Giảm dần</MenuItem>
      </Select>
      <Button variant="outlined" onClick={() => onSort(field, order)}>
        Sắp xếp
      </Button>

      {/* Thêm sinh viên */}
      <Button variant="contained" onClick={onAdd}>
        Thêm sinh viên
      </Button>
    </div>
  );
};

export default Toolbar;
