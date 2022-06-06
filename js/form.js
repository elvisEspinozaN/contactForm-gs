function showtext() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let time = document.getElementById("time").value;
  let msg = document.getElementById("msg").value;

  document.getElementById("show").innerHTML =
    fname + "<br>" + lname + "<br>" + email + "<br>" + time + "<br>" + msg;
}
