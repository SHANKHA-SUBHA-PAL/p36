var dog,happyDog,database,foodS,foodStock;

function preload()
{
  doggyImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 800);
database = firebase.database()  
dog = createSprite(500,500,10,10)
dog.addImage(doggyImg);
dog.scale = 0.5;

//foodStock=database.ref('Food')
//foodStock.on("value",readStock);

}


function draw() {  

background("yellow");

if(keyWentDown(UP_ARROW)){

writeStocks(foodS);
dog.addImage( happyDog);


}

  drawSprites();
  
textSize(25);
fill("orange");
strokeWeight(3);
stroke("red");
text("FOOD REMAINING: "+ foodS,350,230);
text("NOTE: Press up arrow'^'to feed LENO 🥛",250,50);
}
function readStock(data){


foodS = data.val();


}
function writeStocks(x) {
if(x<=0){

x = 0

}else{

x = x-1;

}

database.ref('/').update({Food:x})






}