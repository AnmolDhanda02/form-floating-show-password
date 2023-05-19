// const togglePassword = document.querySelector(".showhidepass");
// const password = document.querySelector(".input_password");

// togglePassword.addEventListener("click", function (e) {
//   // toggle the type attribute
//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);
//   // toggle the eye slash icon
//   this.classList.toggle("fa-eye-slash");
// });

$(document).ready(function () {
  $(".ViewPassword").on("click", function () {
    var parent = $(this).siblings("input");
    var type = parent.attr("type");
    if (type == "text") {
      parent.attr("type", "password");
    } else {
      parent.attr("type", "text");
    }
  });
});
