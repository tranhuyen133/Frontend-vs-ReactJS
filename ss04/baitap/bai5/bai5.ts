// Định nghĩa kiểu Person
interface Person {
    name: string;
    age: number;
}

// Định nghĩa kiểu Employee
interface Employee {
    employeeId: string;
    department: string;
}

// Kết hợp 2 kiểu bằng Intersection Type
type StaffMember = Person & Employee;

// Hàm in thông tin nhân viên
function printStaffInfo(staff: StaffMember): void {
    console.log(
        `Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
    );
}

// Tạo một đối tượng staff mẫu
const staff1: StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};

printStaffInfo(staff1);
