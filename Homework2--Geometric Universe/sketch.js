//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
  frameRate(12);

}

function draw() {
  background(0); //Set your background color to black (0)


for (let i=0; i<100; i++){
push()
stroke(random(255), random(255), random(255));
strokeWeight(5)
scale(random(), random())
rotate(random(HALF_PI), random(HALF_PI), random(HALF_PI))
noFill()
rect(random(width), random(height), random(50), random(50))
pop()
}

  //code here...
}
