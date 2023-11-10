function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

var colorMa = "hotpink"
var shapeMA = "circle"
var size = 90


function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the colorMa, shapeMA, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    colorMa = document.getElementById("color").value;
    size = document.getElementById("size").value;

    if (shapeMA == "circle"){
        fill(colorMa);
        circle(mouseX, mouseY, size);
    }
    if (shapeMA == "square"){
        fill(colorMa);
        square(mouseX, mouseY, size);
    }
    if (shapeMA == "triangle"){
        fill(colorMa);
        triangle(
            mouseX + size, mouseY  + size, // first point
            mouseX + size * 2, mouseY + size * 2, // second point
            mouseX + size * 3, mouseY + size * 3  // third point
        )
    }

    console.log("Mouse down")
}

function setShape(shape){
    shapeMA = shape
}