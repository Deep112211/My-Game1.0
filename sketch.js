const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var GAMESTATE = 0;

var Play;

var Upgrade;

var Charimg;

var character;

var character1, character2;

var character1img, character2img;

var backgroundimg1 = "red";
var backgroundimg2;

function preload() {
play = loadImage("play.png");
upgrade = loadImage("upgrade.png");
character1img = loadImage("man.png");
Bg1 = loadImage("bg1.jpg");
}

function setup() {
createCanvas(displayWidth, displayHeight);
engine = Engine.create();
world = engine.world;

}

function draw() {
    background(backgroundimg1);
    Engine.update(engine);

    if(GAMESTATE === 0) {

        backgroundimg1 = Bg1;

        textSize(30);
        text("Welcome to Zombie Killers", displayWidth / 2-150, displayHeight / 2-200);
        Play = createSprite(displayWidth/2-150, displayHeight/2-50, 100, 50);
        Play.addImage(play);
        Play.scale = 0.09;
        if(mousePressedOver(Play)) {
            GAMESTATE = 1; 
        }

        Upgrade = createSprite(displayWidth/2+170, displayHeight/2-50, 100, 50);
        Upgrade.addImage(upgrade);
        Upgrade.scale = 0.25;
        if(mousePressedOver(Upgrade)) {
            GAMESTATE = 2;
        }
    }

    if (GAMESTATE === 1) {

        backgroundimg1 = "blue";

        Play.destroy();

        character1 = createSprite(displayWidth/2-250, displayHeight/2+100, 50, 100);
        character1.addImage(character1img);
        if(mousePressedOver(character1)) {
            GAMESTATE = 3;
            Charimg = "c1";
        }

        character2 = createSprite(displayWidth/2+250, displayHeight/2+100, 50, 100);

        if(mousePressedOver(character2)) {
            GAMESTATE = 3;
            Charimg = "c2";
        }
    }

    if(GAMESTATE === 3){
        character = createSprite(displayWidth/2, displayHeight/2, 50, 100);

        if(Charimg === "c1") {
            character.addImage(character1img);
        }

        if(Charimg === "c2"){
            character.addImage(character2img);
        }
    }

    drawSprites();
}