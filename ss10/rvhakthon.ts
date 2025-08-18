import * as readlineSync from "readline-sync";

// ===================== CLASSES =====================

class Passenger {
    passengerId: number;
    name: string;
    passportNumber: string;

    constructor(passengerId: number, name: string, passportNumber: string) {
        this.passengerId = passengerId;
        this.name = name;
        this.passportNumber = passportNumber;
    }

    getDetails(): string {
        return `ID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
    }
}

abstract class Flight {
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: Date;
    capacity: number;
    bookedSeats: number = 0;

    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
    }

    bookSeat(): void {
        if (this.bookedSeats < this.capacity) this.bookedSeats++;
        else console.log("Chuyến bay đã đầy!");
    }

    isFull(): boolean {
        return this.bookedSeats >= this.capacity;
    }

    abstract calculateBaggageFee(weight: number): number;
}

class DomesticFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return weight * 50000; // VND
    }
}

class InternationalFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return weight * 10; // USD
    }
}

class Booking {
    bookingId: number;
    passenger: Passenger;
    flight: Flight;
    numberOfTickets: number;
    totalCost: number;

    constructor(bookingId: number, passenger: Passenger, flight: Flight, numberOfTickets: number) {
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * 100; // Giả sử giá vé mặc định 100 (có thể chỉnh)
    }

    getBookingDetails(): string {
        return `Booking ID: ${this.bookingId}, Passenger: ${this.passenger.name}, Flight: ${this.flight.flightNumber}, Tickets: ${this.numberOfTickets}, Total: ${this.totalCost}`;
    }
}

class GenericRepository<T> {
    private items: T[] = [];

    add(item: T): void { this.items.push(item); }
    getAll(): T[] { return this.items; }
    find(predicate: (item: T) => boolean): T | undefined { return this.items.find(predicate); }
    findIndex(predicate: (item: T) => boolean): number { return this.items.findIndex(predicate); }
    remove(predicate: (item: T) => boolean): void { this.items = this.items.filter(i => !predicate(i)); }
}

// ===================== AIRLINE MANAGER =====================

class AirlineManager {
    private flightRepo = new GenericRepository<Flight>();
    private passengerRepo = new GenericRepository<Passenger>();
    private bookingRepo = new GenericRepository<Booking>();

    addFlight(flight: Flight): void { this.flightRepo.add(flight); }
    addPassenger(name: string, passportNumber: string): void {
        const newPassenger = new Passenger(this.passengerRepo.getAll().length + 1, name, passportNumber);
        this.passengerRepo.add(newPassenger);
    }

    createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): Booking | null {
        const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);

        if (!passenger) { console.log("Không tìm thấy hành khách."); return null; }
        if (!flight) { console.log("Không tìm thấy chuyến bay."); return null; }
        if (flight.isFull()) { console.log("Chuyến bay đã đầy."); return null; }

        for (let i = 0; i < numberOfTickets; i++) flight.bookSeat();

        const booking = new Booking(this.bookingRepo.getAll().length + 1, passenger, flight, numberOfTickets);
        this.bookingRepo.add(booking);
        return booking;
    }

    cancelBooking(bookingId: number): void {
        const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
        if (!booking) { console.log("Không tìm thấy booking."); return; }
        // Hoàn ghế
        for (let i = 0; i < booking.numberOfTickets; i++) booking.flight.bookedSeats--;
        this.bookingRepo.remove(b => b.bookingId === bookingId);
        console.log("Booking đã hủy.");
    }

    listAvailableFlights(origin: string, destination: string): void {
        const flights = this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
        flights.forEach(f => console.log(`Flight ${f.flightNumber}, Departure: ${f.departureTime.toLocaleString()}, Seats: ${f.bookedSeats}/${f.capacity}`));
    }

    listBookingsByPassenger(passengerId: number): void {
        const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
        bookings.forEach(b => console.log(b.getBookingDetails()));
    }

    calculateTotalRevenue(): number {
        return this.bookingRepo.getAll().reduce((total, b) => total + b.totalCost, 0);
    }

    countFlightsByType(): void {
        const flights = this.flightRepo.getAll();
        const result = flights.reduce((acc: { Domestic: number; International: number }, f) => {
            if (f instanceof DomesticFlight) acc.Domestic++;
            else if (f instanceof InternationalFlight) acc.International++;
            return acc;
        }, { Domestic: 0, International: 0 });
        console.log(result);
    }

    updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (flight) { flight.departureTime = newDepartureTime; console.log("Cập nhật giờ bay thành công."); }
        else console.log("Không tìm thấy chuyến bay.");
    }

    getFlightPassengerList(flightNumber: string): void {
        const passengers = this.bookingRepo.getAll()
            .filter(b => b.flight.flightNumber === flightNumber)
            .map(b => b.passenger);
        passengers.forEach(p => console.log(p.getDetails()));
    }
}

// ===================== MENU =====================

const manager = new AirlineManager();

function showMenu() {
    console.log(`
1. Thêm hành khách mới
2. Thêm chuyến bay mới
3. Tạo giao dịch đặt vé
4. Hủy giao dịch đặt vé
5. Xem danh sách chuyến bay còn trống
6. Xem danh sách vé của hành khách
7. Tính tổng doanh thu
8. Đếm số lượng chuyến bay nội địa/quốc tế
9. Cập nhật giờ bay
10. Xem danh sách hành khách của chuyến bay
11. Thoát
`);

    const choice = readlineSync.question("Chọn: ");

    switch (choice) {
        case "1": {
            const name = readlineSync.question("Tên hành khách: ");
            const passport = readlineSync.question("Số hộ chiếu: ");
            manager.addPassenger(name, passport);
            break;
        }
        case "2": {
            const type = readlineSync.question("Loại chuyến bay (1=Nội địa, 2=Quốc tế): ");
            const flightNum = readlineSync.question("Flight Number: ");
            const origin = readlineSync.question("Origin: ");
            const destination = readlineSync.question("Destination: ");
            const depTime = new Date(readlineSync.question("Departure Time (YYYY-MM-DD HH:MM): "));
            const capacity = parseInt(readlineSync.question("Sức chứa: "));
            if (type === "1") manager.addFlight(new DomesticFlight(flightNum, origin, destination, depTime, capacity));
            else manager.addFlight(new InternationalFlight(flightNum, origin, destination, depTime, capacity));
            break;
        }
        case "3": {
            const pid = parseInt(readlineSync.question("Passenger ID: "));
            const fnum = readlineSync.question("Flight Number: ");
            const tickets = parseInt(readlineSync.question("Số vé: "));
            const booking = manager.createBooking(pid, fnum, tickets);
            if (booking) console.log("Booking thành công:", booking.getBookingDetails());
            break;
        }
        case "4": {
            const bid = parseInt(readlineSync.question("Booking ID: "));
            manager.cancelBooking(bid);
            break;
        }
        case "5": {
            const origin = readlineSync.question("Origin: ");
            const dest = readlineSync.question("Destination: ");
            manager.listAvailableFlights(origin, dest);
            break;
        }
        case "6": {
            const pid = parseInt(readlineSync.question("Passenger ID: "));
            manager.listBookingsByPassenger(pid);
            break;
        }
        case "7":
            console.log("Tổng doanh thu:", manager.calculateTotalRevenue());
            break;
        case "8":
            manager.countFlightsByType();
            break;
        case "9": {
            const fnum = readlineSync.question("Flight Number: ");
            const newTime = new Date(readlineSync.question("Departure Time (YYYY-MM-DD HH:MM): "));
            manager.updateFlightTime(fnum, newTime);
            break;
        }
        case "10": {
            const fnum = readlineSync.question("Flight Number: ");
            manager.getFlightPassengerList(fnum);
            break;
        }
        case "11":
            console.log("Thoát chương trình.");
            process.exit(0);
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

    showMenu();
}

showMenu();
