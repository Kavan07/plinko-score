const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 200;
var score = 0;

function setup() {
   createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
  background("black");
  Engine.update(engine);

  if(frameCount%300 === 0) {
     score = score + 500;
  }

  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 15; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,-25));
  }

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 15; j = j + 50) {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width - 15; j = j + 50) {
    plinkos.push(new Plinko(j,375));
  }

   if(frameCount%60 === 0) {
     particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
   }

   for(var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  text("score = " + score, 50, 50);

}