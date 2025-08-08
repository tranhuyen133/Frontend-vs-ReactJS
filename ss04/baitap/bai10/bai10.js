// 1. Hàm trả danh sách học viên đã hoàn thành
function getCompletedStudents(course) {
    return course.students.filter(function (student) { return student.hasCompleted; });
}
// 2. Hàm tính điểm trung bình
function calculateAverageScore(course) {
    var completedWithScore = course.students.filter(function (s) { return typeof s.finalScore === "number"; });
    if (completedWithScore.length === 0)
        return null;
    var total = completedWithScore.reduce(function (sum, s) { var _a; return sum + ((_a = s.finalScore) !== null && _a !== void 0 ? _a : 0); }, 0);
    return total / completedWithScore.length;
}
// 3. Hàm in báo cáo khóa học
function printCourseReport(manager) {
    console.log("Tr\u01B0\u1EDDng: ".concat(manager.schoolName, " - N\u0103m: ").concat(manager.year));
    console.log("===== DANH SÁCH KHÓA HỌC =====");
    manager.courses.forEach(function (course) {
        console.log("Kh\u00F3a h\u1ECDc: ".concat(course.title, " (ID: ").concat(course.courseId, ")"));
        console.log("Gi\u1EA3ng vi\u00EAn: ".concat(course.instructor));
        console.log("Tr\u1EA1ng th\u00E1i: ".concat(course.isActive ? "Đang mở" : "Đã đóng"));
        var completedStudents = getCompletedStudents(course);
        console.log("S\u1ED1 h\u1ECDc vi\u00EAn \u0111\u00E3 ho\u00E0n th\u00E0nh: ".concat(completedStudents.length));
        var avgScore = calculateAverageScore(course);
        console.log("\u0110i\u1EC3m trung b\u00ECnh: ".concat(avgScore !== null ? avgScore.toFixed(2) : "Chưa có"));
        console.log("----------------------------");
    });
}
// ====== Ví dụ dữ liệu ======
var manager = {
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
