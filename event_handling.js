function changeColorOnMouseOver(params) {
  var control = document.getElementById("mouseOver");
  control.style.background = "red";
  control.style.color = "yellow";
}

function changeColorOnMouseOut(params) {
  var control = document.getElementById("mouseOver");
  control.style.background = "black";
  control.style.color = "white";
}

function confirmOnSubmit(params) {
  if (confirm("Are you sure want to submit?")) {
    alert("Submitted!");
    return true;
  } else {
    alert("Not submitted!");
    return false;
  }
}

function validateTextBox(controlId) {
  var control = document.getElementById(controlId);

  control.style.color = "white";

  if (control.value == "") {
    control.style.background = "red";
  } else {
    control.style.background = "green";
  }
}

document.getElementById("mouseOverDom").onmouseover = changeColorOnMouseOverDom;
document.getElementById("mouseOverDom").onmouseout = function(params) {
  this.style.background = "black";
  this.style.color = "white";
};

function changeColorOnMouseOverDom(params) {
  this.style.background = "red";
  this.style.color = "yellow";
}

// HTML attribute vs DOM property(overrides HTML attribute)!
document.getElementById("htmlVsDom").onclick = handler2;
function handler1(params) {
  alert("This is from HTML attribute!");
}

function handler2(params) {
  alert("This is from DOM property!");
}

// On Mouse Over and On Mouse Out using Event Listeners!
mouseOverEventListener.addEventListener(
  "mouseover",
  changeColorOnMouseOverEventListener,
  false
);
mouseOverEventListener.addEventListener(
  "mouseout",
  changeColorOnMouseOutEventListener,
  false
);

function changeColorOnMouseOverEventListener(params) {
  this.style.background = "red";
  this.style.color = "yellow";
}
function changeColorOnMouseOutEventListener(params) {
  this.style.background = "black";
  this.style.color = "white";
}
function removeEventHandlers(params) {
  mouseOverEventListener.removeEventListener(
    "mouseover",
    changeColorOnMouseOverEventListener
  );
  mouseOverEventListener.removeEventListener(
    "mouseout",
    changeColorOnMouseOutEventListener
  );
}

// Cross browser check
function ClickHandler(params) {
  alert("Handler is called!");
}

if (crossCheck.addEventListener) {
  // Woks with chrome, firefox etc and with IE 9+
  crossCheck.addEventListener("click", ClickHandler);
} else {
  // Works with > IE 9
  crossCheck.attachEvent("onclick", ClickHandler);
}

// Getting event details!
function getEventDetails(event) {
  var eventDetails =
    "Event Name = " +
    event.type +
    "<br/  >" +
    "X = " +
    event.clientX +
    "<br/>" +
    "Y = " +
    event.clientY +
    "<br/>" +
    "Target Tag Name = " +
    event.target.tagName +
    "<br/>" +
    "Tag Type = " +
    event.target.type;

  document.getElementById("eventDetailsResult").innerHTML = eventDetails;
}

// Changing div colors
var divElements = document.getElementsByClassName("styleClass2");

for (var i = 0; i < divElements.length; i++) {
  divElements[i].onclick = function(params) {
    this.style.borderColor = "red";
    alert(this.getElementsByClassName("styleClass2" + " Color Changed"));
  };
}
