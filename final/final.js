//clock link:w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Dec 29, 2022 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // Display the result in the element with id="demo"
  if (days > 1){
    document.getElementById("clock").innerHTML = days + " DAYS " + hours + " HOURS "
    + minutes + " MINUTES ";
  } else if (days = 1){
    document.getElementById("clock").innerHTML = days + " DAY " + hours + " HOURS "
    + minutes + " MINUTES ";
  } else if (days < 1){
    document.getElementById("clock").innerHTML = days + " DAYS " + hours + " HOURS "
    + minutes + " MINUTES ";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);

function newPage(url){
  window.location = url;
}

//checklist resource: https://www.w3schools.com/howto/howto_js_todolist.asp
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function playAudio(){
  let audio = new Audio("test.wav");
  audio.play();
  document.getElementById("button").src="assets/pause.png";
}

function nextCard(){
  let flashcards = [["assets/AnnikaDecker2.jpg", "Annika Decker #25<br>Yellow/green shooter<br>quick pg<br>great defender<br>prefers driving left"],
                    ["assets/CallieO_Brien.jpg", "Callie O'Brien #5<br>Solid quick pg<br>inconsistent shooter<br>righty driver"],
                    ["assets/MaggieRussell.jpg", "Maggie Russell #33<br>big time scorer<br>righty driver<br>pick&pop<br>relentless on glass"],
                    ["assets/SarahCrossett1.jpg", "Sarah Crossett #30<br>15' shooter<br>rolls<br>up and under<br>posts big"],
                    ["assets/HannahKelly2.jpg", "Hannah Kelly #22<br>Strong guard<br>good cutter<br>offensive rebounder<br>yellow shooter"],
                    ["assets/SofiaGonzalez.jpg", "Sofia Gonzalez #11<br>quick scorer<br>will TO w/ pressure<br>attacks left<br>green shooter"],
                    ["assets/SamanthaSousa.jpg", "Samantha Sousa #12<br>smart, experienced<br>15' capable<br>righty driver<br>offensive rebounder"],
                    ["assets/MikaylaPaquette.jpg", "Mikayla Paquette #55<br>backup center<br>wants to score<br>yellow shooter"],
                    ["assets/MalloryFolliard.jpg", "Mallory Folliard #20<br>Pick and pops<br>shot blocker"],
                    ["assets/AyahHarper2.jpg", "Ayah Harper #15<br>athletic guard<br>driver"],
                    ["assets/offense.jpg", "run w/ discipline<br>create shots for shooters<br>get the ball inside<br>execute"],
                    ["assets/defense.jpg", "transition defense<br>post defense<br>guard your yard<br>box out"]];
  var rand = Math.floor(Math.random()*flashcards.length);
  document.getElementById("front").src=flashcards[rand][0];
  document.getElementById("back-side").innerHTML=flashcards[rand][1];
}

function thisCard(number){
  let flashcards = [["assets/AnnikaDecker2.jpg", "Annika Decker #25<br>Yellow/green shooter<br>quick pg<br>great defender<br>prefers driving left"],
                    ["assets/CallieO_Brien.jpg", "Callie O'Brien #5<br>Solid quick pg<br>inconsistent shooter<br>righty driver"],
                    ["assets/MaggieRussell.jpg", "Maggie Russell #33<br>big time scorer<br>righty driver<br>pick&pop<br>relentless on glass"],
                    ["assets/SarahCrossett1.jpg", "Sarah Crossett #30<br>15' shooter<br>rolls<br>up and under<br>posts big"],
                    ["assets/HannahKelly2.jpg", "Hannah Kelly #22<br>Strong guard<br>good cutter<br>offensive rebounder<br>yellow shooter"],
                    ["assets/SofiaGonzalez.jpg", "Sofia Gonzalez #11<br>quick scorer<br>will TO w/ pressure<br>attacks left<br>green shooter"],
                    ["assets/SamanthaSousa.jpg", "Samantha Sousa #12<br>smart, experienced<br>15' capable<br>righty driver<br>offensive rebounder"],
                    ["assets/MikaylaPaquette.jpg", "Mikayla Paquette #55<br>backup center<br>wants to score<br>yellow shooter"],
                    ["assets/MalloryFolliard.jpg", "Mallory Folliard #20<br>Pick and pops<br>shot blocker"],
                    ["assets/AyahHarper2.jpg", "Ayah Harper #15<br>athletic guard<br>driver"],
                    ["assets/offense.jpg", "run w/ discipline<br>create shots for shooters<br>get the ball inside<br>execute"],
                    ["assets/defense.jpg", "transition defense<br>post defense<br>guard your yard<br>box out"]];
  document.getElementById("front").src=flashcards[number][0];
  document.getElementById("back-side").innerHTML=flashcards[number][1];
}
