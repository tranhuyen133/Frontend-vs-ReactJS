// Hàm in thông tin nhân viên
function printStaffInfo(staff) {
    console.log("Nh\u00E2n vi\u00EAn: ".concat(staff.name, " (").concat(staff.age, " tu\u1ED5i), M\u00E3 nh\u00E2n vi\u00EAn: ").concat(staff.employeeId, " - Ph\u00F2ng: ").concat(staff.department));
}
// Tạo một đối tượng staff mẫu
var staff1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff1);
