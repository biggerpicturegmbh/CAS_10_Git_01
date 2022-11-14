
/*
let cityShift

function setup(){
    createCanvas(windowWidth, windowHeight)   

*/
let gameState = 1 
let hasGamesStarted = false
let counter
let heroAction = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220)

  counter = frameCount%1600
  console.log(counter)

  if (gameState == 0) {
    startGame()
  }else if (gameState == 1){
    playGame()
  }else if (gameState == 2){
    endGame()
  }
}

function keyPressed(){
  if (key == ' '){ 
    gameState = 1;
  }  
}

function keyReleased() {
  if (heroAction != 0) {
    heroAction = 0
  } 
  return false; // prevent any default behavior
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    heroAction = 1
  } else if (keyCode === DOWN_ARROW) {
    heroAction = 2
  }
}

function startGame() {
  background(0)
  textAlign(CENTER)
  textSize(60)
  fill(255)
  text('Jump and run', width/2, height/2)
  fill(150, 0, 255)
  textSize(24)
  text('press space to start', width/2, height/2+100)
/*
}

function draw(){
    background(0)
    cityShift = frameCount%1920
    translate(width-cityShift, height)
    scale(1, -1)
    skyline()
}   

function skyline(){
    fill(150, 255, 80)
    noStroke()
    rect(0, 0, 1920, 200)
    rect(100, 0, 80, 300)
    rect(1300, 0, 130, 400)
    rect(1100, 0, 180, 300)
    rect(400, 0, 120, 250)
    rect(600, 0, 200, 450)
    rect(1600, 0, 200, 350)

    // yjdnfglkeajnr 
}
*/
