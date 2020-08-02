//Random pin generator output
const pinGeneratorOutput = document.querySelector(".pin-generator input");

//Setting 4 digit random pin
document.querySelector(".generate-btn").addEventListener("click", function () {
  let randomPin = Math.floor(1000 + Math.random() * 9000);
  pinGeneratorOutput.value = randomPin;
});

//Extracting pin input
let pinInput = document.querySelector(".input-section input");

//Extracting all Number Buttons
const numberButtons = document.getElementsByClassName("numberKey");
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function (e) {
    pinInput = document.querySelector(".input-section input");
    pinInput.value = pinInput.value + e.target.innerHTML;
  });
}

//Clear button functionality
const clearButton = document.querySelector(".button.clear");
clearButton.addEventListener("click", function () {
  pinInput.value = "";
});

//Backspace button functionality
const backSpaceButton = document.querySelector(".button.back");
backSpaceButton.addEventListener("click", function () {
  debugger;
  pinInput.value = pinInput.value.slice(0, -1);
});

//Extracting status message elements
const matchedMessage = document.getElementById("matchedMessage");
const notMatchedMessage = document.getElementById("notMatchedMessage");

//Extracting submit button
const submitButton = document.querySelector(".submit-btn");

submitButton.addEventListener("click", doesPinMatch);

//Matching functionality
function doesPinMatch() {
  if (parseInt(pinInput.value) == parseInt(pinGeneratorOutput.value)) {
    notMatchedMessage.style.display = "none";
    matchedMessage.style.display = "block";
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#151d4b";
    return;
  }

  const leftTry = document.getElementById("tryLeft");
  notMatchedMessage.style.display = "block";
  leftTry.innerText = parseInt(leftTry.innerText) - 1;

  if (leftTry.innerText == "0") {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#151d4b";
  }
}
