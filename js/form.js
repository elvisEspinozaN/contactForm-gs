function validation() {
  let email = document.getElementById("email");
  let valid = true;

  if (!email.value.toLowerCase().match("[a-z0-9]+@[a-z]+.[a-z]+")) {
    email.style.background = "red";
    valid = false;
  }

  if (valid) {
    storeUserData();
    window.location.href = "transfer.html";
  }
}

function savedTrans() {
  localStorage.setItem("fname", document.getElementById("fname").value);
  localStorage.setItem("lname", document.getElementById("lname").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("msg", document.getElementById("msg").value);
}
