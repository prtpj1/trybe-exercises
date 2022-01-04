// SELECTORS
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//EVENT_LISTENERS
HREF_LINK.addEventListener("click", goTrybe);
INPUT_CHECKBOX.addEventListener("click", checkBox);
INPUT_TEXT.addEventListener("keypress", inputText);

//FUNCTIONS
function goTrybe(event) {
  event.preventDefault();
}

function checkBox(event) {
  event.preventDefault();
}

function inputText(event) {
  if (event.key !== "a") {
    event.preventDefault();
  }
}
