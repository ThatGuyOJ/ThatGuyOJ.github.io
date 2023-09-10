background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(177, 32, 230);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
var eyeSize = bodyHeight/5;

noStroke();
var drawFish = function (centerX, centerY, bodyLength, bodyHeight, tailWidth, tailHeight, eyeSize) {
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    
    fill(0, 13, 255);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(0, 0, 0);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
    };

drawFish(98, 101, 74, 143, 50, 37, 27);
drawFish(165, 297, 190, 80, 71, 69, 4);
drawFish(299, 164, 77, 43, 120, 18, 52);


// extra stuff
var seeweedX = 376;
var seeweedY = 324;
var drawSeeweed = function(seeweedX, seeweedY) {
  fill(38, 181, 100);
  ellipse(seeweedX, seeweedY, 8, 150);
};
drawSeeweed(376, 324);
drawSeeweed(322, 324);
drawSeeweed(346, 324);

var pebbleX = 5;
var pebbleY = 395;
var pebble = function(pebbleX, pebbleY) {
fill(112, 105, 105);
ellipse(pebbleX, pebbleY, 10, 10);
};
pebble(5, 395);
pebble(14, 395);
pebble(24, 395);
pebble(34, 395);
pebble(45, 395);
pebble(54, 395);
pebble(10, 385);
pebble(19, 385);
pebble(27, 385);
pebble(38, 385);
pebble(15, 376);
pebble(25, 376);
pebble(35, 377);
pebble(45, 377);
pebble(21, 367);
pebble(32, 368);
pebble(42, 368);
pebble(48, 385);


var bubbleX = 212;
var bubbleY = 75;
var bubble = function(bubbleX, bubbleY) {
fill(89, 216, 255);
stroke(0, 0, 0);
strokeWeight(1);
ellipse(bubbleX, bubbleY, 18, 18);
};
bubble(238, 105);
bubble(212, 75);
bubble(204, 248);
bubble(255, 214);
bubble(62, 163);
bubble(38, 248);
bubble(355, 217);
bubble(31, 335);
bubble(301, 370);
bubble(164, 370);
bubble(284, 301);
bubble(256, 370);
bubble(61, 22);
bubble(249, 30);
bubble(307, 21);
bubble(366, 75);

mouseClicked = function() {
     fill(bodyColor);
     stroke(0, 0, 0);
    // body
    ellipse(mouseX, mouseY, bodyLength, bodyHeight);
    // tail
    
    fill(0, 13, 255);
    triangle(mouseX-90, mouseY+39, mouseX-57, mouseY-3, mouseX - 91, mouseY-41);
    // eye
    fill(0, 0, 0);
    ellipse(mouseX+37, mouseY-6, eyeSize, eyeSize);
};

