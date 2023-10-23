/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

//pre variable for checking if dyslexia is active
var dyslexiaModeOn = false

//function to call to when button is pressed
function dyslexiaMode(){
  //adding the ability to toggle between dyslexia mode when button is pressed
  if (dyslexiaMode){
    dyslexiaMode = false
    document.querySelector("body").setAttribute("class", "-");
  }else if (dyslexiaMode == false){
    dyslexiaMode = true
    document.querySelector("body").setAttribute("class", "dyslexia-mode");
  }
}

//adding an event listener to the button
const defaultButton = document.querySelector("#dyslexia-toggle")
defaultButton.addEventListener("click",dyslexiaMode);