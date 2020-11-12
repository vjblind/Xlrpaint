/* eslint-disable no-undef, no-unused-vars */
var x1, x2, y1, y2;
var angle1, angle2;
var scalar = 70;
var fond;
var robotoCondensed;
let speed2 = 0;
let angle = 0;
let t, g, myFont, myFont1, zuptype_pica, HussarMotorway;
let inkhue = 0;
let  brght =99;
var boDol = 1;
// an array to add multiple particles

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CORNER);
  // createCanvas(windowWidth, windowHeight);
   fond = loadImage("data/pexels-emre-can-2110951.jpg");
  myFont = loadFont("data/Swinging.ttf");
  myFont1 = loadFont("data/WC_Rhesus_A_Bta.otf");
  zuptype_pica = loadFont("data/zuptype_pica.ttf");
  HussarMotorway = loadFont("data/WC_Rhesus_A_Bta.otf");

  // createCanvas(1200, 1200 );
  background(0, 234, 23);
  colorMode(RGB, 255, 255, 255, 1);
  // rectMode(CENTER);
  g = createGraphics(windowWidth, windowHeight);
  t = createGraphics(windowWidth, windowHeight);
  t.background(0);
//  g.background(0);
  g.textAlign(CENTER, CENTER);
}

function draw() 
{
 
textSize(132);
text('word', 10, 30);
fill(0, 102, 153);
text('word', 10, 60);
fill(0, 102, 153, 51);
text('word', 10, 90); 
  background(0 ); 
  boDol++; //blendMode(LIGHTEST);
  let time = millis();
   rotateX(sin(time / 1234)/12);
   rotateY(sin(time / 1234)/12);
       translate  (0,0, 523*sin(time / 1134)/12);
   // image(fond,-windowWidth/2, -windowHeight/2,width,height);
  if (boDol < 4) {
   /// background(0, 234, 23);
  }
  stroke(255);
  strokeWeight(4);
  smooth();
  // Draw if mouse is pressed
 let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  g.fill(0, 0, 0, 11);
  g.noStroke();
     g.colorMode(HSB, 359, 99, 99, 99);
    //change ink color if mouse is pressed, moving, and colored mode

  
  /*if (mouseIsPressed && speed>0 && button1==true) {

  }*/
     
     
  //console.log((millis()/100)%1000);
  //if (millis() % 7000 > 6950) 
  //g.rect(0, 0, windowWidth, windowHeight);

  //g.stroke(255);    
  g.strokeWeight(1);
  if (mouseIsPressed) {colorMode(HSB, 359, 99, 99, 99);
   liquidfront();
inkhue = inkhue + 1.75;
   g.stroke(inkhue, 100, brght);
    //angle += 5;
    // let val = cos(radians(angle)) * 12.0;
   //let md = map(m,  3,110 ,22,515 / (speed *3));
    g.strokeWeight(speed/3+12);
    g.line(mouseX, mouseY, pmouseX, pmouseY);
    g.strokeWeight(3 / speed);
    liquid();
       //ink color loop
  if (inkhue >= 359) {
    inkhue = 0;
  }
  }
  
  

  
  
  //g.ellipse(610,300,500,500);
  g.fill(234);
  tint(255, 126);
  console.log(mouseX - 400 + "ee");
  //fond.mask(image(g, 900, 650,-2000,-1600) );
  t.ellipse(560, 220, 100, 100);
  //::
  //fond.mask(image(t, 900, 650,-2000,-1600));
  
  blendMode(LIGHTEST);
  push();
  
         translate  (0,+11+113*cos(time /  114)/12,  +11+113*cos(time / 114)/12);

   image(g, -windowWidth/2, -windowHeight/2);
   
   pop();
   
    push();
  
         translate  (0,+11+ 13*cos(time /  114)/12,  +11+-5113*cos(time / 1114)/12);

   image(g, -windowWidth/2, -windowHeight/2);
   
   pop();
}

let ang1 = 0;
let ang2 = 0;

//////////////////////////////////////////////////////////////////////////////////////////


function liquidfront() { 


  g.textFont(HussarMotorway);
  g.fill(250, 56);
    //g.noFill();
  g.fill(inkhue*1.5,444,300);  //g.fill(inkhue, 100, brght);
  g.textSize(height / (random(millis()) % 25));
  if (millis() % 400 <  12)
    g.text(
      char(millis() % 250),
      mouseX - 400 + x1 * 1.2,
      mouseY - 400 + y1 * 1.2
    );

}
function liquid() { 
  x1 = scalar * cos(millis() / 1000);
  y1 = scalar * sin(millis() / 1000);
  
      g.colorMode(HSB, 359, 99, 99, 99);
/*  fill(inkhue*33);
  // g.ellipse((mouseX-400)+x1 ,(mouseY-400)+y1 ,10,10);
  g.textFont(myFont);
  g.textSize(height / (random(millis()) %  115));
  if (millis() % 300 < 112)
    g.text(
      char(millis() % 250),
      mouseX - 400 + x1 * 1.2,
      mouseY - 400 + y1 * 1.2
    );
 
  g.textSize(random(40, 100));
  if (millis() % 300 < 22)
    g.text(
      char(3 + (millis() % 250)),
      mouseX - 900 + x1 * 1.2,
      mouseY - 300 + y1 * 1.2
    );
*/


  g.textFont(myFont1);
  g.noStroke();
  g.fill(inkhue*1.5,444,300);  //g.fill(inkhue, 100, brght);
  g.textSize(random(140, 170));
  if (millis() % 300 < 122)
    g.text(
      char(millis() % 250),
      mouseX - random(1400,-1234 ) + x1 * 1.2,
      mouseY - random(1400,-1234 )+ y1 * 1.2
    );
    
    
    
      g.textFont(myFont1);
  g.noStroke();
  g.fill(inkhue*3.5,299,300);  //g.fill(inkhue, 100, brght);
  g.textSize(random(140, 970));
  if (millis() % 300 <  12)
    g.text(
      char(millis() % 250),
      mouseX - random(400,-234 ) + x1 * 1.2,
      mouseY - random(400,-234 )+ y1 * 1.2
    );
    
    
    
    
   
  g.textFont(zuptype_pica);
  g.noStroke();
  g.fill(250, 56);
  g.textSize(random(140, 200));
  if (millis() % 300 <212)
    g.text(
      char( random(56,45)),
      mouseX - random( 1400,-234 ) + x1 * 1.2,
      mouseY - 400 + y1 * 1.2);  

  angle1 += 1;
  angle2 += 3;
}

///////////////////////////////////////////////////////////////////////////////////::
// this class describes the properties of a single particle.