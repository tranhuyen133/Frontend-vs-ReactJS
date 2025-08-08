// Định nghĩa lớp Vehicle
class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    // Phương thức in thông tin
    printInfo(): void {
        console.log(`Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng: ${this.company}`);
    }
}

// Tạo 2 đối tượng từ lớp Vehicle
const vehicle1 = new Vehicle("Camry", 2020, "Toyota");
const vehicle2 = new Vehicle("Model S", 2023, "Tesla");

// Truy cập và in thông tin
vehicle1.printInfo();
vehicle2.printInfo();
