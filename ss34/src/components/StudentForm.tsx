import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import type { Student } from "../utils/types";

interface Props {
  initialData?: Student | null;
  onSubmit: (student: Student) => void;
}

const StudentForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState<Student>({
    id: "",
    fullName: "",
    age: 0,
    gender: true,
    dateOfBirth: "",
    placeOfBirth: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<Student>>({});

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<Student> = {};
    if (!form.id) newErrors.id = "Mã SV không được để trống";
    if (!form.fullName) newErrors.fullName = "Tên SV không được để trống";
    if (!form.age || form.age <= 0) newErrors.age = "Tuổi > 0";
    if (!form.dateOfBirth) newErrors.dateOfBirth = "Ngày sinh bắt buộc";
    else if (new Date(form.dateOfBirth) > new Date())
      newErrors.dateOfBirth = "Ngày sinh không hợp lệ";
    if (!form.placeOfBirth) newErrors.placeOfBirth = "Nơi sinh bắt buộc";
    if (!form.address) newErrors.address = "Địa chỉ bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(form);
  };

  return (
    <div className="flex flex-col gap-3 p-4">
      <TextField
        label="Mã sinh viên"
        name="id"
        value={form.id}
        onChange={handleChange}
        disabled={!!initialData} // nếu là edit thì không cho sửa id
        error={!!errors.id}
        helperText={errors.id}
      />
      <TextField
        label="Tên sinh viên"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        error={!!errors.fullName}
        helperText={errors.fullName}
      />
      <TextField
        label="Tuổi"
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        error={!!errors.age}
        helperText={errors.age}
      />
      <Select
        name="gender"
        value={form.gender ? "true" : "false"}
        onChange={(e) =>
          setForm({ ...form, gender: e.target.value === "true" })
        }
      >
        <MenuItem value="true">Nam</MenuItem>
        <MenuItem value="false">Nữ</MenuItem>
      </Select>
      <TextField
        type="date"
        label="Ngày sinh"
        name="dateOfBirth"
        value={form.dateOfBirth}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        error={!!errors.dateOfBirth}
        helperText={errors.dateOfBirth}
      />
      <TextField
        label="Nơi sinh"
        name="placeOfBirth"
        value={form.placeOfBirth}
        onChange={handleChange}
        error={!!errors.placeOfBirth}
        helperText={errors.placeOfBirth}
      />
      <TextField
        label="Địa chỉ"
        name="address"
        value={form.address}
        onChange={handleChange}
        error={!!errors.address}
        helperText={errors.address}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default StudentForm;
