function transfer() {
  document.getElementById("fname-transfer").textContent = localStorage("fname");
  document.getElementById("lname-transfer").textContent = localStorage("lname");
  document.getElementById("email-transfer").textContent = localStorage("email");
  document.getElementById("msg-transfer").textContent = localStorage("msg");
}
