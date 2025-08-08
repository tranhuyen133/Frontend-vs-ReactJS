// Khai báo kiểu dữ liệu
type Student = {
  readonly studentId: string;
  name: string;
  email: string;
  hasCompleted: boolean;
  finalScore?: number; // optional: chỉ có nếu học viên đã hoàn thành
};

type Course = {
  courseId: string;
  title: string;
  instructor: string;
  students: Student[];
  isActive: boolean;
};

type CourseManager = {
  schoolName: string;
  year: number;
  courses: Course[];
};

// 1. Hàm trả danh sách học viên đã hoàn thành
function getCompletedStudents(course: Course): Student[] {
  return course.students.filter(student => student.hasCompleted);
}

// 2. Hàm tính điểm trung bình
function calculateAverageScore(course: Course): number | null {
  const completedWithScore = course.students.filter(
    s => typeof s.finalScore === "number"
  );

  if (completedWithScore.length === 0) return null;

  const total = completedWithScore.reduce((sum, s) => sum + (s.finalScore ?? 0), 0);
  return total / completedWithScore.length;
}


// 3. Hàm in báo cáo khóa học
function printCourseReport(manager: CourseManager): void {
  console.log(`Trường: ${manager.schoolName} - Năm: ${manager.year}`);
  console.log("===== DANH SÁCH KHÓA HỌC =====");

  manager.courses.forEach(course => {
    console.log(`Khóa học: ${course.title} (ID: ${course.courseId})`);
    console.log(`Giảng viên: ${course.instructor}`);
    console.log(`Trạng thái: ${course.isActive ? "Đang mở" : "Đã đóng"}`);

    const completedStudents = getCompletedStudents(course);
    console.log(`Số học viên đã hoàn thành: ${completedStudents.length}`);

    const avgScore = calculateAverageScore(course);
    console.log(`Điểm trung bình: ${avgScore !== null ? avgScore.toFixed(2) : "Chưa có"}`);

    console.log("----------------------------");
  });
}

// ====== Ví dụ dữ liệu ======
const manager: CourseManager = {
  schoolName: "Trường CNTT",
  year: 2025,
  courses: [
    {
      courseId: "JS01",
      title: "JavaScript Cơ bản",
      instructor: "Nguyễn Văn A",
      isActive: true,
      students: [
        { studentId: "S1", name: "Huy", email: "huy@example.com", hasCompleted: true, finalScore: 8 },
        { studentId: "S2", name: "Lan", email: "lan@example.com", hasCompleted: false },
        { studentId: "S3", name: "Minh", email: "minh@example.com", hasCompleted: true, finalScore: 9 }
      ]
    },
    {
      courseId: "TS01",
      title: "TypeScript Nâng cao",
      instructor: "Trần Thị B",
      isActive: false,
      students: [
        { studentId: "S4", name: "An", email: "an@example.com", hasCompleted: true, finalScore: 7.5 }
      ]
    }
  ]
};

// Chạy thử
printCourseReport(manager);
