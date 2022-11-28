
var paragraph = document.getElementById("numbers-array")
var numbers = [8,"-", 4, "="];
var operations = ["+","-","*", "/"]
var newnumbers = [1,2,3,4,5,6,7,8,9]
paragraph.textContent = numbers.join(" ");

function newNumber(){
  var operation = operations[Math.floor(Math.random()*operations.length)];
  var newnumber = newnumbers[Math.floor(Math.random()*newnumbers.length)];
  var buttontitle = document.getElementById("button");
  if (numbers.length < 16){
    numbers.unshift(operation);
    numbers.unshift(newnumber);
    buttontitle.textContent = "try again!";
  } else if (numbers.length >= 16){
    buttontitle.textContent = "drag me!";
    dragElement(document.getElementById("button"));
  }
  paragraph.textContent = numbers.join(' ');
}

// https://www.w3schools.com/howto/howto_js_draggable.asp

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
