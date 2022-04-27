var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "z":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "x":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "v":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "b":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "n":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "m":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
let whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"]
let blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]


document.addEventListener("keydown", function (piano) {
    if (whiteKeys.includes(piano.code)) {
        let pianokey = new Audio("white_keys/" + piano.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + piano.code.replace("Key", "") + "' key is pressed");
    } else if (blackKeys.includes(piano.code)) {
        let pianokey = new Audio("black_keys/" + piano.code.replace("Key", "") + ".mp3");
        pianokey.play();
        console.log("The '" + piano.code.replace("key", "") + "' key is pressed");
    } else console.log("The '" + piano.code.replace("Key", "") + "' key is not on the piano");

});
