import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import type { RootState } from "../utils/store";
import { addStudent, updateStudent, deleteStudent } from "../utils/studentSlice";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";  // 👈 thêm vào
import type { Student } from "../utils/types";

const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.student.students);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [viewStudent, setViewStudent] = useState<Student | null>(null);

  const handleSubmit = (student: Student) => {
    if (editingStudent) {
      dispatch(updateStudent(student));
    } else {
      dispatch(addStudent(student));
    }
    setOpenForm(false);
    setEditingStudent(null);
  };

  const handleSearch = (keyword: string) => {
    // TODO: lọc danh sách trong redux hoặc state phụ
    console.log("search:", keyword);
  };

  const handleSort = (field: "fullName" | "age", order: "asc" | "desc") => {
    console.log("sort:", field, order);
  };

  return (
    <div className="p-6 flex gap-6">
      <div className="flex-1">
        {/* Toolbar hiển thị lại */}
        <Toolbar
          onSearch={handleSearch}
          onSort={handleSort}
          onAdd={() => {
            setEditingStudent(null);
            setOpenForm(true);
          }}
        />

        <StudentList
          students={students}
          onDelete={(id) => dispatch(deleteStudent(id))}
          onEdit={(s) => {
            setEditingStudent(s);
            setOpenForm(true);
          }}
          onView={(s) => setViewStudent(s)}
        />
      </div>

      {/* Form thêm/sửa */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingStudent ? "Cập nhật sinh viên" : "Thêm sinh viên"}</DialogTitle>
        <DialogContent>
          <StudentForm initialData={editingStudent} onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      {/* Xem chi tiết */}
      <Dialog open={!!viewStudent} onClose={() => setViewStudent(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Chi tiết sinh viên</DialogTitle>
        <DialogContent>
          {viewStudent && (
            <div className="flex flex-col gap-2">
              <p><b>Mã SV:</b> {viewStudent.id}</p>
              <p><b>Tên:</b> {viewStudent.fullName}</p>
              <p><b>Tuổi:</b> {viewStudent.age}</p>
              <p><b>Giới tính:</b> {viewStudent.gender ? "Nam" : "Nữ"}</p>
              <p><b>Ngày sinh:</b> {viewStudent.dateOfBirth}</p>
              <p><b>Nơi sinh:</b> {viewStudent.placeOfBirth}</p>
              <p><b>Địa chỉ:</b> {viewStudent.address}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentManagement;
