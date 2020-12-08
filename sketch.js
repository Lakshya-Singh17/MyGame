var gameState = 0;
var form;
var player1;
var roomCount = 0;
var roomA,roomB,roomC,roomD;

function preload(){
    roomA = loadImage("sprites/BEDROOM.MyGame.jpg");

}
function setup(){
    createCanvas(displayWidth - 40,displayHeight - 40);

    form = new Form();
    

}
function draw(){
    background("white");
    if(gameState === 0){
        form.display();
    }
    if(gameState === 1){
        roomCount = 1;

        if(roomCount === 1){
            image(roomA,0,0,width,height);
        }
    player1.display();
    }
}