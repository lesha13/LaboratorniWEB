function OpenSearch() {
  menu.style.width = "300px";
  document.getElementById("btn-box").style.filter = "brightness(0.8)";
  document.getElementById("text").textContent = "Whoa! You found me";
  document.body.style.backgroundColor = "rgb(36, 30, 71)";
  menu.addEventListener("transitionend", AllowClick);
}

function OpenRun() {
  menu.style.width = "300px";
  document.getElementById("btn-box").style.filter = "brightness(0.8)";
  document.getElementById("text").textContent = "Please, don't run!";
  document.body.style.backgroundColor = "rgb(36, 30, 71)";
  menu.addEventListener("transitionend", AllowClick);
}

function Close() {
  menu.style.width = "0px";
  document.getElementById("btn-box").style.filter = "brightness(1)";
  document.body.style.backgroundColor = "darkslateblue";
  window.removeEventListener("click", ClickOutside);
  menu.removeEventListener("transitionend", AllowClick);
}

var menu = document.getElementById("pop-menu");

function AllowClick() {
  window.addEventListener("click", ClickOutside);
}

function ClickOutside(event) {
  if (event.target !== menu) {
    Close();
  }
}
