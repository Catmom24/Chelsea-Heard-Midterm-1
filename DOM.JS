//SHUFFLE BUTTON FUNCTION:

//Note: reseting every zIndex to 0. 
// Study Math.Random 

//1. identify and select button 
//2. listen to event click on button 
//3. change image when button is pressed!


let container = document.querySelector(".project_images");
let button = document.querySelector(".project_button");

// console.log(button);

button.addEventListener("click", shuffleImages);

function shuffleImages() {
    //for loop to select random images!
    for (let index = 0; index < container.childElementCount ; index++) {
        const element = container.children[index]; 
        element.style.zIndex="0";
    }
    let random = Math.floor(Math.random() * container.childElementCount);
    container.children[random].style.zIndex="5"
  
    
   
}

//ADD DRAWING FEATURE FROM P5.JS SKETCH ON WEBSITE: 
let x =400
let y =400
let newCanvas;


function setup() {
  createCanvas(windowWidth, windowHeight);
  newCanvas = createGraphics(windowWidth, windowHeight)
  newCanvas.background(52, 235, 122);
    background("white");
}

function draw() {
  image(newCanvas, 0, 0)
  x += random (-5,2);
  y += random (-5,2);
  fill(255, 230, 0)
  noStroke()
  rect(CENTER)
  rect(x,y,20,20)
  
  if (mouseIsPressed) {
    fill(255, 230, 0)
    stroke(4)
    newCanvas.rect(mouseX, mouseY, 20)
    
    
  }
  
  image(newCanvas, 0, 0)
  
}




//FETCH API: This was done in the HTML Page
//Step 1: Call Fetch() Function
//Step 2: Give it a single argument (path to the resource)
//Step 3: Response! (Promise) Stream of Data ex) text, blob, json.
//Step 4: Complete Data Stream. 
//Step 5: Make an Image Element. 


  

  
  
  
  
  
  
  
  





































