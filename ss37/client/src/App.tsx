import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./features/students/studentSlice";
import type { Student } from "./features/students/types";
import "./App.css";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list: students, loading, error } = useSelector(
    (state: RootState) => state.students
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleSubmit = (data: Partial<Student>) => {
    if (data.id) {
      dispatch(updateStudent(data as Student));
    } else {
      dispatch(
        addStudent({
          name: data.name ?? "Chưa có tên",
          age: data.age ?? 0,
          grade: data.grade ?? "N/A",
        })
      );
    }
  };

  const handleDelete = (id: string | number) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      {loading && <p>Đang tải...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.age} - {s.grade}
            <button onClick={() => handleDelete(s.id)}>Xóa</button>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          handleSubmit({ name: "Học sinh mới", age: 18, grade: "12A" })
        }
      >
        Thêm học sinh
      </button>
    </div>
  );
};

export default App;
