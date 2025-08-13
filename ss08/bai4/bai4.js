var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Hàm generic kết hợp 2 đối tượng
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Thử nghiệm với 2 đối tượng khác kiểu
var person = { name: "Huyền", age: 20 };
var contact = { email: "huyen@example.com", phone: "0123456789" };
var merged = mergeObjects(person, contact);
console.log(merged);
// { name: 'Huyền', age: 20, email: 'huyen@example.com', phone: '0123456789' }
