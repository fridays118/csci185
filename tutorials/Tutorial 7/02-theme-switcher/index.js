function defaultTheme() {
    // your code here.
    document.querySelector("body").setAttribute("class", "");
}

function oceanTheme() {
   // your code here.
   document.querySelector("body").setAttribute("class", "ocean");

}

function desertTheme() {
   // your code here.
   document.querySelector("body").setAttribute("class", "desert");

}

function highContrastTheme() {
    // your code here.
    document.querySelector("body").setAttribute("class", "high-contrast");

}

//assigning function to buttons
const defaultButton = document.querySelector("#default")
defaultButton.addEventListener("click",defaultTheme);

const desertButton = document.querySelector("#desert")
desertButton.addEventListener("click",desertTheme);

const oceanButton = document.querySelector("#ocean")
oceanButton.addEventListener("click",oceanTheme);

const highcontrastButton = document.querySelector("#high-contrast")
highcontrastButton.addEventListener("click",highContrastTheme);

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/