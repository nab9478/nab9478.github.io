
var paragraph = document.getElementById("numbers-array")
var numbers = [8,"-", 4, "="];
var operations = ["+","-","*", "/"]
var newnumbers = [1,2,3,4,5,6,7,8,9]
paragraph.innerHTML = numbers.join(" ");

function newNumber(){
  var operation = operations[Math.floor(Math.random()*operations.length)];
  var newnumber = newnumbers[Math.floor(Math.random()*newnumbers.length)];
  if (numbers.length < 16){
    numbers.unshift(operation);
    numbers.unshift(newnumber);
  } else if (numbers.length >= 16){
    numbers = [8,"-", 4, "="];
  }
  paragraph.innerHTML = numbers.join(' ');
  var buttontitle = document.getElementById("button");
  buttontitle.innerHTML = "try again!";
}
