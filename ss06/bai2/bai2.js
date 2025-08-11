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
// 1. Abstract class Job
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    // In ra loại công việc
    Job.prototype.printType = function () {
        console.log("Lo\u1EA1i c\u00F4ng vi\u1EC7c: ".concat(this.type));
    };
    return Job;
}());
// 2. Lớp FulltimeJob
var FulltimeJob = /** @class */ (function (_super) {
    __extends(FulltimeJob, _super);
    function FulltimeJob() {
        return _super.call(this, "Full-time") || this;
    }
    FulltimeJob.prototype.calculateSalary = function () {
        return 10000000; // lương cố định
    };
    return FulltimeJob;
}(Job));
// 3. Lớp ParttimeJob
var ParttimeJob = /** @class */ (function (_super) {
    __extends(ParttimeJob, _super);
    function ParttimeJob(workingHour) {
        var _this = _super.call(this, "Part-time") || this;
        _this.workingHour = workingHour;
        return _this;
    }
    ParttimeJob.prototype.calculateSalary = function () {
        return 30000 * this.workingHour;
    };
    return ParttimeJob;
}(Job));
// --- Sử dụng ---
var fulltime = new FulltimeJob();
var parttime = new ParttimeJob(80); // 80 giờ làm
fulltime.printType();
console.log("L\u01B0\u01A1ng: ".concat(fulltime.calculateSalary().toLocaleString(), " VND"));
parttime.printType();
console.log("L\u01B0\u01A1ng: ".concat(parttime.calculateSalary().toLocaleString(), " VND"));
