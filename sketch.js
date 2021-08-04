//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;

function preload() {
  //load images here
  dogImg = loadImage('images/Dog.png');
  happyDogImg = loadImage('images/happydog.png');
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(250, 320, 80, 80);
  dog.addImage(dogImg);
  dog.scale = 0.15;
}


function draw() {
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)) {
    dog.addImage(happyDogImg);
  }
}

function readStock(data) {
  foodS = data.val();
}



