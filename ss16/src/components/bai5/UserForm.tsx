    import React, { Component } from "react";
    import "./UserForm.css";

    type StateType = {
    name: string;
    email: string;
    age: string;
    error: string;
    submitted: boolean;
    };

    export default class UserForm extends Component<object, StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
        name: "",
        email: "",
        age: "",
        error: "",
        submitted: false,
        };
    }

    // Hàm xử lý khi thay đổi input
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
        [name]: value,
        });
    };

    // Hàm xử lý khi submit form
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, age } = this.state;

        // Validation
        if (!email.includes("@")) {
        this.setState({ error: "Email không hợp lệ", submitted: false });
        return;
        }

        if (Number(age) < 0) {
        this.setState({ error: "Tuổi không được âm", submitted: false });
        return;
        }

        // Nếu hợp lệ
        this.setState({ error: "", submitted: true });
    };

    // Reset form
    handleReset = () => {
        this.setState({
        name: "",
        email: "",
        age: "",
        error: "",
        submitted: false,
        });
    };

    render() {
        const { name, email, age, error, submitted } = this.state;

        return (
        <div className="form-container">
            <h2> Nhập thông tin người dùng</h2>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Họ tên"
                value={name}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Tuổi"
                value={age}
                onChange={this.handleChange}
            />
            <div className="btn-group">
                <button type="submit">Gửi</button>
                <button type="button" onClick={this.handleReset}>
                Xóa tất cả
                </button>
            </div>
            </form>

            {/* Hiển thị lỗi */}
            {error && <p className="error">{error}</p>}

            {/* Hiển thị kết quả */}
            {submitted && !error && (
            <div className="result">
                <h3> Thông tin người dùng:</h3>
                <p>Họ tên: {name}</p>
                <p>Email: {email}</p>
                <p>Tuổi: {age}</p>
            </div>
            )}
        </div>
        );
    }
    }
