class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false; // Mặc định chưa đăng nhập
    }

    // Phương thức đăng nhập - sẽ được ghi đè
    public login(password: string): void {
        if (password === this.password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công!");
        } else {
            console.log("Sai mật khẩu!");
        }
    }

    // Phương thức đăng xuất
    public logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công!");
        }
    }
}

class UserAcc extends Account {
    public status: "active" | "banned";

    constructor(id: number, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    // Ghi đè phương thức login
    public login(password: string): void {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
        super.login(password); // Gọi phương thức login của lớp cha
    }
}

// --- Kiểm tra ---
const user1 = new UserAcc(1, "Huyen", "123456", "user", "active");
const user2 = new UserAcc(2, "Nam", "abcdef", "user", "banned");

console.log("---- Kiểm tra user1 ----");
user1.login("123456"); // Đăng nhập thành công
user1.logout();        // Đăng xuất thành công

console.log("\n---- Kiểm tra user2 ----");
user2.login("abcdef"); // Tài khoản đã bị khóa
user2.logout();        // Không làm gì vì chưa đăng nhập

