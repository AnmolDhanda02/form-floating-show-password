let successpopupbox = document.getElementById("successpopupbox");
let container = document.querySelector(".blurbg");
function successopenpopupbox() {
  successpopupbox.classList.add("successopenpopup");
  container.classList.add("active");
}

function successclosepopupbox() {
  successpopupbox.classList.remove("successopenpopup");
  container.classList.remove("active");
}

let failurepopupbox = document.getElementById("failurepopupbox");
function failureopenpopupbox() {
  failurepopupbox.classList.add("failureopenpopup");
  container.classList.add("active");
}

function failureclosepopupbox() {
  failurepopupbox.classList.remove("failureopenpopup");
  container.classList.remove("active");
}
