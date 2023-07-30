let canvasWidth = 1600;
let canvasHeight = 170;

let textString01 = '.FRANCOCHEN';
let textString02 = 'F.RANCOCHEN';
let textString03 = 'FR.ANCOCHEN';
let textString04 = 'FRA.NCOCHEN';
let textString05 = 'FRAN.COCHEN';
let textString06 = 'FRANC.OCHEN';
let textString07 = 'FRANCO.CHEN';
let textString08 = 'FRANCOC.HEN';
let textString09 = 'FRANCOCH.EN';
let textString10 = 'FRANCOCHE.N';
let textString11 = 'FRANCOCHEN.';

let textString = textString07;

let interFont;

function preload() {
  interFont = loadFont('Inter-Regular.ttf');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  
  clear();
  // background(220);
  
  if (mouseX > 0 * canvasWidth/11 && mouseX < 1 * canvasWidth/11) {
    textString = textString01;
  }
  
  if (mouseX > 1 * canvasWidth/11 && mouseX < 2 * canvasWidth/11) {
    textString = textString02;
  }
  
  if (mouseX > 2 * canvasWidth/11 && mouseX < 3 * canvasWidth/11) {
    textString = textString03;
  }  
  
  if (mouseX > 3 * canvasWidth/11 && mouseX < 4 * canvasWidth/11) {
    textString = textString04;
  }
  
  if (mouseX > 4 * canvasWidth/11 && mouseX < 5 * canvasWidth/11) {
    textString = textString05;
  }  
  
  if (mouseX > 5 * canvasWidth/11 && mouseX < 6 * canvasWidth/11) {
    textString = textString06;
  }
  
  if (mouseX > 6 * canvasWidth/11 && mouseX < 7 * canvasWidth/11) {
    textString = textString07;
  }  
  
  if (mouseX > 7 * canvasWidth/11 && mouseX < 8 * canvasWidth/11) {
    textString = textString08;
  }
  
  if (mouseX > 8 * canvasWidth/11 && mouseX < 9 * canvasWidth/11) {
    textString = textString09
  }  
  
  if (mouseX > 9 * canvasWidth/11 && mouseX < 10 * canvasWidth/11) {
    textString = textString10;
  }
  
  if (mouseX > 10 * canvasWidth/11) {
    textString = textString11;
  }  
  
  
  fill('#327bff');
  textFont(interFont);
  textAlign(CENTER, CENTER);
  textSize(225);
  text(textString, canvasWidth/2, canvasHeight/2 - 27);
  
  
  
  
}