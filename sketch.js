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
}

function playGame () {
  background(120)


  fill(255,120,0)
  noStroke()
  textSize(120)

  push()
  translate(width-counter*2, 0)
  obstacles()
  translate(1600, 0)
  obstacles()
  pop()

  let xHero = width/5
  let yHero = height-100
  textSize(80)

  if (heroAction == 0) {
    text('👾', xHero, yHero)
  }else if (heroAction == 1) {
    translate(0, -120)
    text('👾', xHero, yHero)
  }else if (heroAction == 2) {
    translate(0, +80)
    text('👾', xHero, yHero)
  }




}

function endGame () {

}

function obstacles () {
  fill(21, 255, 0)
  text('🥊', 50, height-100)
  text('🚌', 400, height-30)
  text('🚓', 800, height-30)
  text('🛸', 1200, height-100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}