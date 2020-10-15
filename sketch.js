const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var character;
var plant1,plant2,plant3,plant4,plant5;

var health;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
character=createSprite(600,400,20,20);

  
}

function draw(){
    background(0);
    Engine.update(engine);
    spawnPlant1();
    spawnPlant2();
    spawnPlant3();
    spawnPlant4();
    spawnPlant5();
    drawSprites();
}
function spawnPlant1(){
    plant1=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);

}
function spawnPlant2(){
    plant2=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);

}
function spawnPlant3(){
    plant3=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);

}
function spawnPlant4(){
    plant4=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);

}
function spawnPlant5(){
    plant5s=createSprite(Math.round(random(0,1200)),Math.round(random(0,800)),40,40);

}