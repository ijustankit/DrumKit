// function playyy() {
//   var audio = new Audio("/sounds/tom-1.mp3");
//   audio.play();
// }

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", playyy);
// }

/** playing same audio on click of each button

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var audio = new Audio("/sounds/tom-1.mp3");
//     audio.play();
//   });
// }

**/

/**working
document.querySelector(".w").addEventListener("click", function () {
  var audio = new Audio("/sounds/snare.mp3");
  audio.play();
});

document.querySelector(".a").addEventListener("click", function () {
  var audio = new Audio("/sounds/kick-bass.mp3");
  audio.play();
});

document.querySelector(".s").addEventListener("click", function () {
  var audio = new Audio("/sounds/crash.mp3");
  audio.play();
});

document.querySelector(".d").addEventListener("click", function () {
  var audio = new Audio("/sounds/tom-1.mp3");
  audio.play();
});

document.querySelector(".j").addEventListener("click", function () {
  var audio = new Audio("/sounds/tom-2.mp3");
  audio.play();
});

document.querySelector(".k").addEventListener("click", function () {
  var audio = new Audio("/sounds/tom-3.mp3");
  audio.play();
});

document.querySelector(".l").addEventListener("click", function () {
  var audio = new Audio("/sounds/tom-4 .mp3");
  audio.play();
});


till here **/

var number = document.querySelectorAll(".drum");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    playing(buttonInnerHTML);
    flash(buttonInnerHTML);
  });
}

// for keyboard

document.addEventListener("keypress", function (event) {
  playing(event.key);
  flash(event.key);
});

function playing(key) {
  switch (key) {
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "s":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
  }
}

function flash(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");

  // timeout function for a delay
  setTimeout(() => {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);

}


