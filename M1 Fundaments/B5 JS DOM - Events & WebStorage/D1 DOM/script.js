//Header
/* document.getElementsByTagName("h1")[0].style.backgroundColor =
  "rgb(0, 176, 105)"; */
document.getElementById("header-container").style.backgroundColor =
  "rgb(0, 176, 105)";

//body
// document.getElementsByTagName("*").style.backgroundColor = "rgb(243, 243, 243)";
const tagBG = document.getElementsByTagName("*");
for (let i = 0; i < tagBG.length; i += 1) {
  tagBG[0].style.backgroundColor = "rgb(243, 243, 243)";
}

//Urgents
const emerg = document.querySelectorAll(".emergency-tasks div");
for (let i = 0; i < emerg.length; i += 1) {
  emerg[i].style.backgroundColor = "rgb(255, 159, 132)";
}
//Urgents h3
const emergH3 = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergH3.length; i += 1) {
  emergH3[i].style.backgroundColor = "rgb(165, 0, 243)";
}

//Non-Urgents
const noEmerg = document.querySelectorAll(".no-emergency-tasks div");
for (let i = 0; i < noEmerg.length; i += 1) {
  noEmerg[i].style.backgroundColor = "rgb(249, 219, 94)";
}

//Non-Urgents h3
const noEmergH3 = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergH3.length; i += 1) {
  noEmergH3[i].style.backgroundColor = "black";
}

//Footer
document.getElementById("footer-container").style.backgroundColor =
  "rgb(0, 53, 51)";

/* for (let i = 0; i < noEmerg.length; i += 1) {
    noEmerg[i].style.backgroundColor = "yellow";
  }
 */
