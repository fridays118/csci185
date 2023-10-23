//setting a var to a query selector
const contentBox = document.querySelector(".content")
const headerBox = document.querySelector("h1")

function makeBigger() {
   alert('make bigger!');
   contentBox.style.fontSize = "larger";
   headerBox.style.fontSize = "xx-large";
};

function makeSmaller() {
   alert('make smaller!');
   contentBox.style.fontSize = "smaller";
   headerBox.style.fontSize = "small";
};

//assigning function to buttons
const biggerButtonClick = document.querySelector("#bigger")
biggerButtonClick.addEventListener("click",makeBigger);

const smallerButtonClick = document.querySelector("#smaller")
smallerButtonClick.addEventListener("click",makeSmaller);

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
