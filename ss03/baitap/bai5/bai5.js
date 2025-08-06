function capitalize(str) {
    if (!str)
        return ""; 
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
var firstName = "john";
var lastName = "doe";
firstName = capitalize(firstName);
lastName = capitalize(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log("Họ và tên đầy đủ:", fullName);
