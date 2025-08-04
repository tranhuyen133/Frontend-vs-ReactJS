import { displayUserInfo } from './displayUserInfo';

const user1 = {
  name: "Huyen",
  age: 20,
  location: { city: "Nghe An", country: "Vietnam" }
};

const user2 = {
  name: "A",
  age: 25,
  location: { city: "Hanoi", country: "Vietnam" },
  contact: { email: "a@gmail.com", phone: "0123456789" },
  job: { title: "Developer", company: "Tech Corp" }
};

document.querySelector("#btn1").addEventListener("click", () => {
  document.querySelector("#output").textContent = displayUserInfo(user1);
});

document.querySelector("#btn2").addEventListener("click", () => {
  document.querySelector("#output").textContent = displayUserInfo(user2);
});
