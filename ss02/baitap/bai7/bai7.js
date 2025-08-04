import { formatDate } from './formatData';

document.querySelector("#formatBtn").addEventListener("click", () => {
  const input = document.querySelector("#dateInput").value;
  const result = formatDate(input);
  document.querySelector("#output").textContent = ` Kết quả: ${result}`;
});
