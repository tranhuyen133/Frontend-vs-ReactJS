function capitalize(str: string): string {
  if (!str) return ""; 
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let firstName: string = "john";
let lastName: string = "doe";

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = `${firstName} ${lastName}`;

console.log("Họ và tên đầy đủ:", fullName);
