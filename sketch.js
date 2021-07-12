function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.color[1])
  circle(ball.x,ball.y,ball.r)
  ball.xspeed=0.2
  ball.x=ball.x+ball.xspeed
}
var ball={
  x:20,
  y:30,
  r:30,
  xvelocity:0,
  yvelocity:0,
  color:["blue","red","green"]
}