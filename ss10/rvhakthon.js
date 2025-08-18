"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// ===================== CLASSES =====================
var Passenger = /** @class */ (function () {
    function Passenger(passengerId, name, passportNumber) {
        this.passengerId = passengerId;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    Passenger.prototype.getDetails = function () {
        return "ID: ".concat(this.passengerId, ", Name: ").concat(this.name, ", Passport: ").concat(this.passportNumber);
    };
    return Passenger;
}());
var Flight = /** @class */ (function () {
    function Flight(flightNumber, origin, destination, departureTime, capacity) {
        this.bookedSeats = 0;
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
    }
    Flight.prototype.bookSeat = function () {
        if (this.bookedSeats < this.capacity)
            this.bookedSeats++;
        else
            console.log("Chuyến bay đã đầy!");
    };
    Flight.prototype.isFull = function () {
        return this.bookedSeats >= this.capacity;
    };
    return Flight;
}());
var DomesticFlight = /** @class */ (function (_super) {
    __extends(DomesticFlight, _super);
    function DomesticFlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomesticFlight.prototype.calculateBaggageFee = function (weight) {
        return weight * 50000; // VND
    };
    return DomesticFlight;
}(Flight));
var InternationalFlight = /** @class */ (function (_super) {
    __extends(InternationalFlight, _super);
    function InternationalFlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InternationalFlight.prototype.calculateBaggageFee = function (weight) {
        return weight * 10; // USD
    };
    return InternationalFlight;
}(Flight));
var Booking = /** @class */ (function () {
    function Booking(bookingId, passenger, flight, numberOfTickets) {
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * 100; // Giả sử giá vé mặc định 100 (có thể chỉnh)
    }
    Booking.prototype.getBookingDetails = function () {
        return "Booking ID: ".concat(this.bookingId, ", Passenger: ").concat(this.passenger.name, ", Flight: ").concat(this.flight.flightNumber, ", Tickets: ").concat(this.numberOfTickets, ", Total: ").concat(this.totalCost);
    };
    return Booking;
}());
var GenericRepository = /** @class */ (function () {
    function GenericRepository() {
        this.items = [];
    }
    GenericRepository.prototype.add = function (item) { this.items.push(item); };
    GenericRepository.prototype.getAll = function () { return this.items; };
    GenericRepository.prototype.find = function (predicate) { return this.items.find(predicate); };
    GenericRepository.prototype.findIndex = function (predicate) { return this.items.findIndex(predicate); };
    GenericRepository.prototype.remove = function (predicate) { this.items = this.items.filter(function (i) { return !predicate(i); }); };
    return GenericRepository;
}());
// ===================== AIRLINE MANAGER =====================
var AirlineManager = /** @class */ (function () {
    function AirlineManager() {
        this.flightRepo = new GenericRepository();
        this.passengerRepo = new GenericRepository();
        this.bookingRepo = new GenericRepository();
    }
    AirlineManager.prototype.addFlight = function (flight) { this.flightRepo.add(flight); };
    AirlineManager.prototype.addPassenger = function (name, passportNumber) {
        var newPassenger = new Passenger(this.passengerRepo.getAll().length + 1, name, passportNumber);
        this.passengerRepo.add(newPassenger);
    };
    AirlineManager.prototype.createBooking = function (passengerId, flightNumber, numberOfTickets) {
        var passenger = this.passengerRepo.find(function (p) { return p.passengerId === passengerId; });
        var flight = this.flightRepo.find(function (f) { return f.flightNumber === flightNumber; });
        if (!passenger) {
            console.log("Không tìm thấy hành khách.");
            return null;
        }
        if (!flight) {
            console.log("Không tìm thấy chuyến bay.");
            return null;
        }
        if (flight.isFull()) {
            console.log("Chuyến bay đã đầy.");
            return null;
        }
        for (var i = 0; i < numberOfTickets; i++)
            flight.bookSeat();
        var booking = new Booking(this.bookingRepo.getAll().length + 1, passenger, flight, numberOfTickets);
        this.bookingRepo.add(booking);
        return booking;
    };
    AirlineManager.prototype.cancelBooking = function (bookingId) {
        var booking = this.bookingRepo.find(function (b) { return b.bookingId === bookingId; });
        if (!booking) {
            console.log("Không tìm thấy booking.");
            return;
        }
        // Hoàn ghế
        for (var i = 0; i < booking.numberOfTickets; i++)
            booking.flight.bookedSeats--;
        this.bookingRepo.remove(function (b) { return b.bookingId === bookingId; });
        console.log("Booking đã hủy.");
    };
    AirlineManager.prototype.listAvailableFlights = function (origin, destination) {
        var flights = this.flightRepo.getAll().filter(function (f) { return f.origin === origin && f.destination === destination && !f.isFull(); });
        flights.forEach(function (f) { return console.log("Flight ".concat(f.flightNumber, ", Departure: ").concat(f.departureTime.toLocaleString(), ", Seats: ").concat(f.bookedSeats, "/").concat(f.capacity)); });
    };
    AirlineManager.prototype.listBookingsByPassenger = function (passengerId) {
        var bookings = this.bookingRepo.getAll().filter(function (b) { return b.passenger.passengerId === passengerId; });
        bookings.forEach(function (b) { return console.log(b.getBookingDetails()); });
    };
    AirlineManager.prototype.calculateTotalRevenue = function () {
        return this.bookingRepo.getAll().reduce(function (total, b) { return total + b.totalCost; }, 0);
    };
    AirlineManager.prototype.countFlightsByType = function () {
        var flights = this.flightRepo.getAll();
        var result = flights.reduce(function (acc, f) {
            if (f instanceof DomesticFlight)
                acc.Domestic++;
            else if (f instanceof InternationalFlight)
                acc.International++;
            return acc;
        }, { Domestic: 0, International: 0 });
        console.log(result);
    };
    AirlineManager.prototype.updateFlightTime = function (flightNumber, newDepartureTime) {
        var flight = this.flightRepo.find(function (f) { return f.flightNumber === flightNumber; });
        if (flight) {
            flight.departureTime = newDepartureTime;
            console.log("Cập nhật giờ bay thành công.");
        }
        else
            console.log("Không tìm thấy chuyến bay.");
    };
    AirlineManager.prototype.getFlightPassengerList = function (flightNumber) {
        var passengers = this.bookingRepo.getAll()
            .filter(function (b) { return b.flight.flightNumber === flightNumber; })
            .map(function (b) { return b.passenger; });
        passengers.forEach(function (p) { return console.log(p.getDetails()); });
    };
    return AirlineManager;
}());
// ===================== MENU =====================
var manager = new AirlineManager();
function showMenu() {
    console.log("\n1. Th\u00EAm h\u00E0nh kh\u00E1ch m\u1EDBi\n2. Th\u00EAm chuy\u1EBFn bay m\u1EDBi\n3. T\u1EA1o giao d\u1ECBch \u0111\u1EB7t v\u00E9\n4. H\u1EE7y giao d\u1ECBch \u0111\u1EB7t v\u00E9\n5. Xem danh s\u00E1ch chuy\u1EBFn bay c\u00F2n tr\u1ED1ng\n6. Xem danh s\u00E1ch v\u00E9 c\u1EE7a h\u00E0nh kh\u00E1ch\n7. T\u00EDnh t\u1ED5ng doanh thu\n8. \u0110\u1EBFm s\u1ED1 l\u01B0\u1EE3ng chuy\u1EBFn bay n\u1ED9i \u0111\u1ECBa/qu\u1ED1c t\u1EBF\n9. C\u1EADp nh\u1EADt gi\u1EDD bay\n10. Xem danh s\u00E1ch h\u00E0nh kh\u00E1ch c\u1EE7a chuy\u1EBFn bay\n11. Tho\u00E1t\n");
    var choice = readlineSync.question("Chọn: ");
    switch (choice) {
        case "1": {
            var name_1 = readlineSync.question("Tên hành khách: ");
            var passport = readlineSync.question("Số hộ chiếu: ");
            manager.addPassenger(name_1, passport);
            break;
        }
        case "2": {
            var type = readlineSync.question("Loại chuyến bay (1=Nội địa, 2=Quốc tế): ");
            var flightNum = readlineSync.question("Flight Number: ");
            var origin_1 = readlineSync.question("Origin: ");
            var destination = readlineSync.question("Destination: ");
            var depTime = new Date(readlineSync.question("Departure Time (YYYY-MM-DD HH:MM): "));
            var capacity = parseInt(readlineSync.question("Sức chứa: "));
            if (type === "1")
                manager.addFlight(new DomesticFlight(flightNum, origin_1, destination, depTime, capacity));
            else
                manager.addFlight(new InternationalFlight(flightNum, origin_1, destination, depTime, capacity));
            break;
        }
        case "3": {
            var pid = parseInt(readlineSync.question("Passenger ID: "));
            var fnum = readlineSync.question("Flight Number: ");
            var tickets = parseInt(readlineSync.question("Số vé: "));
            var booking = manager.createBooking(pid, fnum, tickets);
            if (booking)
                console.log("Booking thành công:", booking.getBookingDetails());
            break;
        }
        case "4": {
            var bid = parseInt(readlineSync.question("Booking ID: "));
            manager.cancelBooking(bid);
            break;
        }
        case "5": {
            var origin_2 = readlineSync.question("Origin: ");
            var dest = readlineSync.question("Destination: ");
            manager.listAvailableFlights(origin_2, dest);
            break;
        }
        case "6": {
            var pid = parseInt(readlineSync.question("Passenger ID: "));
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
            var fnum = readlineSync.question("Flight Number: ");
            var newTime = new Date(readlineSync.question("Departure Time (YYYY-MM-DD HH:MM): "));
            manager.updateFlightTime(fnum, newTime);
            break;
        }
        case "10": {
            var fnum = readlineSync.question("Flight Number: ");
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
