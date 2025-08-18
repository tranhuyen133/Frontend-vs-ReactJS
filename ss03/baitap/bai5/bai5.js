function capitalize(str) {
    if (!str)
        return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
let firstName = "john";
let lastName = "doe";
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log("Họ và tên đầy đủ:", fullName);
export {};
//# sourceMappingURL=bai5.js.map