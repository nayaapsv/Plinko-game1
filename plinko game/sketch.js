const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particle = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground1;
function setup() {
  createCanvas(1600,1600);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k<= width; k=k+80 ) {
    divisions.push(new Divisions( k,400, 10, divisionHeight));
 } 

 
ground1 = new ground(150, 550,3000, 10);
for (var j = 15; j <=width; j=j+50) {
  plinkos.push(new Plinko(j,75,10));}
 
for (var j = 15; j <=width-10; j=j+50) {
 plinkos.push(new Plinko(j, 175,10));}

 
 
 
 
}

function draw() {
  background(0,0,0); 
  for (var k = 0; k < divisions.length; k++) {

    divisions [k] . display();
  }
for (var j = 0; j < plinkos.length; j++) {
 
    plinkos[j].display();
  }
  
  
  for (var i = 0; i < particle.length; i++) {
    particle[i].display();
  }
  
  if(frameCount%60===0){
    particle.push(new particles(random(width/2-10,width/2+10),10,10) )
    }
  
    
     ground1.display();
  
  
  drawSprites();
}
