const phoneBooks = [];

const addContact = (name, phone, email) => {
  const contact = {
    name,
    phone,
    email
  };
  phoneBooks.push(contact);
};

const displayContact = () => {
  console.log("===== Danh bạ điện thoại =====");
  for (const contact of phoneBooks) {
    console.log(`Tên: ${contact.name}`);
    console.log(`Số điện thoại: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
    console.log("-----------------------------");
  }
};

addContact("Huyền", "0987654321", "huyen@gmail.com");
addContact("A", "0912345678", "a@gmail.com");

displayContact();
