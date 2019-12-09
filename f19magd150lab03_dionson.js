
var deltaMouseX;
var deltaMouseY;
var r=0;
var g=0;
var b= 0;
var w = 10;
var h = 10;
var pendu = 0;
var sinHeight = 0;
var cosWidth = 0;

function mousePressed() {
  clear();
  background('#F08080');
}

function setup() {
  createCanvas(400, 400);
  background('#F08080');
  frameRate(15);

}

function draw() {

  fill(r, g, b);

  r = (r + 3) % 400;
  g = (g + 3) % 400;
  b = (b + 3) % 400;

  w = (w + 1.5) % (width = 50.5);
  h = (h + 1.5) % (height = 50.5);

  pendu = sqrt(10000/(w*h*.02));

  sinHeight = sin(h);
  sinHeight = sinHeight*40;
  cosWidth = cos(w);
  cosWidth = cosWidth*40;

  ellipse(mouseX+30, mouseY+30, w, h);
  print("(" + mouseX + ", " + mouseY + ")");

  ellipse(mouseX-30, mouseY+30, w, h);
  print("(" + mouseX + ", " + mouseY + ")");

  ellipse(mouseX+0, mouseY-30, w, h);
  print("(" + mouseX + ", " + mouseY + ")");

  ellipse(mouseX, mouseY, pendu, pendu);
  print("(" + mouseX + ", " + mouseY + ")");

  ellipse(mouseX+sinHeight, mouseY-cosWidth, 10, 10);
  print("(" + mouseX + ", " + mouseY + ")");

textSize(62);
text('click!', 120, 60);
float(str)
fill(0, 102, 153);

}
