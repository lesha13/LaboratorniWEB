let chooser = document.getElementById("choose");
let circle = document.querySelectorAll("#circle");

let descriptionChecked = false;

function Title() {
  chooser.innerHTML = `
  <h3>Choose title content</h3>
  <br>
  <br>
  <button id="choose-btn" onclick="Next1()">Submit title</button>
  `;
  circle[0].style.color = "white";
  circle[0].style.background = "cornflowerblue";

  circle[1].style.color = "black";
  circle[1].style.background = "white";

  circle[2].style.color = "black";
  circle[2].style.background = "white";

  descriptionChecked = false;
}

function Description() {
  chooser.innerHTML = `
    <h3>Choose description content</h3>
    <br>
    <br>
    <button id="choose-btn" onclick="Back1()">Back</button>
    <button id="choose-btn" onclick="Next2()">Submit title</button>
    `;
  circle[1].style.color = "white";
  circle[1].style.background = "cornflowerblue";

  circle[2].style.color = "black";
  circle[2].style.background = "white";

  descriptionChecked = true;
}

function Confirm() {
  if (descriptionChecked) {
    chooser.innerHTML = `
    <h3>Are you happy now?</h3>
    <br>
    <br>
    <button id="choose-btn"onclick="Back2()">No, go back</button>
    <button id="choose-btn">Yes, go ahead</button>
    `;
    circle[2].style.color = "white";
    circle[2].style.background = "cornflowerblue";
  }
}

function Back1() {
  Title();
}
function Back2() {
  Description();
}
function Next1() {
  Description();
}
function Next2() {
  Confirm();
}

Title();
