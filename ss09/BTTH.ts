import * as readlineSync from "readline-sync";

// ===================== CLASS DEFINITIONS =====================
class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

abstract class Vehicle {
    id: number;
    type: string;
    rentalPricePerDay: number;
    isAvailable: boolean;

    constructor(id: number, type: string, rentalPricePerDay: number) {
        this.id = id;
        this.type = type;
        this.rentalPricePerDay = rentalPricePerDay;
        this.isAvailable = true;
    }

    rent(): void { this.isAvailable = false; }
    returnVehicle(): void { this.isAvailable = true; }

    abstract calculateRentalCost(days: number): number;
    abstract getFeatures(): string[];
    abstract getInsurancePolicy(): string;
}

class Car extends Vehicle {
    constructor(id: number, rentalPricePerDay: number) { super(id, "Car", rentalPricePerDay); }
    calculateRentalCost(days: number): number { return days * this.rentalPricePerDay; }
    getFeatures(): string[] { return ["Điều hòa", "GPS dẫn đường"]; }
    getInsurancePolicy(): string { return "Bảo hiểm toàn diện, miễn thường $500"; }
}

class Motorcycle extends Vehicle {
    constructor(id: number, rentalPricePerDay: number) { super(id, "Motorcycle", rentalPricePerDay); }
    calculateRentalCost(days: number): number { return days * this.rentalPricePerDay; }
    getFeatures(): string[] { return ["Mũ bảo hiểm đi kèm"]; }
    getInsurancePolicy(): string { return "Bảo hiểm trách nhiệm dân sự cơ bản"; }
}

class Truck extends Vehicle {
    constructor(id: number, rentalPricePerDay: number) { super(id, "Truck", rentalPricePerDay); }
    calculateRentalCost(days: number): number { return days * this.rentalPricePerDay; }
    getFeatures(): string[] { return ["Thùng hàng lớn", "Bửng nâng thủy lực"]; }
    getInsurancePolicy(): string { return "Bảo hiểm hàng hóa và phương tiện thương mại"; }
}

class Rental {
    rentalId: number;
    customer: Customer;
    vehicle: Vehicle;
    days: number;
    totalCost: number;

    constructor(rentalId: number, customer: Customer, vehicle: Vehicle, days: number) {
        this.rentalId = rentalId;
        this.customer = customer;
        this.vehicle = vehicle;
        this.days = days;
        this.totalCost = vehicle.calculateRentalCost(days);
    }

    getDetails(): string {
        return `Rental ID: ${this.rentalId}, Customer: ${this.customer.name}, Vehicle: ${this.vehicle.type} (ID: ${this.vehicle.id}), Days: ${this.days}, Total: $${this.totalCost}`;
    }
}

class RentalAgency {
    vehicles: Vehicle[] = [];
    customers: Customer[] = [];
    rentals: Rental[] = [];

    addVehicle(vehicle: Vehicle): void { this.vehicles.push(vehicle); }
    addCustomer(name: string, email: string, phone: string): Customer {
        const newCustomer = new Customer(this.customers.length + 1, name, email, phone);
        this.customers.push(newCustomer);
        return newCustomer;
    }

    rentVehicle(customerId: number, vehicleId: number, days: number): Rental | null {
        const customer = this.customers.find(c => c.id === customerId);
        const vehicle = this.vehicles.find(v => v.id === vehicleId);

        if (!customer) { console.log("Không tìm thấy khách hàng."); return null; }
        if (!vehicle) { console.log("Không tìm thấy phương tiện."); return null; }
        if (!vehicle.isAvailable) { console.log("Xe đang được thuê."); return null; }

        vehicle.rent();
        const rental = new Rental(this.rentals.length + 1, customer, vehicle, days);
        this.rentals.push(rental);
        return rental;
    }

    returnVehicle(vehicleId: number): void {
        const vehicle = this.vehicles.find(v => v.id === vehicleId);
        if (!vehicle) { console.log("Không tìm thấy xe."); return; }
        vehicle.returnVehicle();
        console.log(`Xe ID ${vehicleId} đã được trả lại.`);
    }

    listAvailableVehicles(): void {
        const available = this.vehicles.filter(v => v.isAvailable);
        console.log("Xe còn trống:");
        available.forEach(v => console.log(`ID: ${v.id}, Type: ${v.type}, Price/day: $${v.rentalPricePerDay}`));
    }

    listCustomerRentals(customerId: number): void {
        const rentals = this.rentals.filter(r => r.customer.id === customerId);
        if (rentals.length === 0) { console.log("Khách hàng chưa có hợp đồng nào."); return; }
        rentals.forEach(r => console.log(r.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.rentals.reduce((total, r) => total + r.totalCost, 0);
    }

    getVehicleTypeCount(): void {
        const counts = this.vehicles.reduce((acc, v) => {
            acc[v.type] = (acc[v.type] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        console.log("Số lượng từng loại xe:", counts);
    }

    getVehicleFeatures(vehicleId: number): void {
        const vehicle = this.vehicles.find(v => v.id === vehicleId);
        if (vehicle) console.log("Tính năng:", vehicle.getFeatures());
        else console.log("Không tìm thấy xe.");
    }

    getVehicleInsurance(vehicleId: number): void {
        const vehicle = this.vehicles.find(v => v.id === vehicleId);
        if (vehicle) console.log("Bảo hiểm:", vehicle.getInsurancePolicy());
        else console.log("Không tìm thấy xe.");
    }
}

// ===================== MENU (1 - 11, 8 và 10 để trống) =====================
const agency = new RentalAgency();

function showMenu() {
    console.log(`
1. Thêm khách hàng
2. Thêm phương tiện
3. Thuê xe
4. Trả xe
5. Xem danh sách xe còn trống
6. Xem hợp đồng của khách hàng
7. Tính tổng doanh thu
8. (Để trống)
9. Đếm số lượng từng loại xe
10. (Để trống)
11. Hiển thị tính năng và bảo hiểm của xe
12. Thoát
    `);

    const choice = readlineSync.question("Chọn: ");
    switch (choice) {
        case "1": {
            const name = readlineSync.question("Tên khách: ");
            const email = readlineSync.question("Email: ");
            const phone = readlineSync.question("SĐT: ");
            agency.addCustomer(name, email, phone);
            break;
        }
        case "2": {
            const type = readlineSync.question("Loại xe (1=Car, 2=Motorcycle, 3=Truck): ");
            const price = parseFloat(readlineSync.question("Giá thuê 1 ngày: "));
            if (type === "1") agency.addVehicle(new Car(agency.vehicles.length + 1, price));
            else if (type === "2") agency.addVehicle(new Motorcycle(agency.vehicles.length + 1, price));
            else if (type === "3") agency.addVehicle(new Truck(agency.vehicles.length + 1, price));
            else console.log("Loại không hợp lệ.");
            break;
        }
        case "3": {
            const cid = parseInt(readlineSync.question("ID khách hàng: "));
            const vid = parseInt(readlineSync.question("ID xe: "));
            const days = parseInt(readlineSync.question("Số ngày thuê: "));
            const rental = agency.rentVehicle(cid, vid, days);
            if (rental) console.log("Thuê xe thành công:", rental.getDetails());
            break;
        }
        case "4": {
            const vid = parseInt(readlineSync.question("ID xe trả: "));
            agency.returnVehicle(vid);
            break;
        }
        case "5":
            agency.listAvailableVehicles();
            break;
        case "6": {
            const cid = parseInt(readlineSync.question("ID khách hàng: "));
            agency.listCustomerRentals(cid);
            break;
        }
        case "7":
            console.log("Tổng doanh thu:", agency.calculateTotalRevenue());
            break;
        case "8":
            // Để trống
            break;
        case "9":
            agency.getVehicleTypeCount();
            break;
        case "10":
            // Để trống
            break;
        case "11": {
            const vid = parseInt(readlineSync.question("ID xe: "));
            agency.getVehicleFeatures(vid);
            agency.getVehicleInsurance(vid);
            break;
        }
        case "12":
            console.log("Thoát chương trình.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

    showMenu();
}

showMenu();
