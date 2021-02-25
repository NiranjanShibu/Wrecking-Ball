const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, box4, box5, box6, box7;
var ball, rope1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600, 375, 100, 100);
    box2 = new Box(600, 275, 100, 100);
    box3 = new Box(600, 175, 100, 100);
    box4 = new Box(740, 375, 100, 100);
    box5 = new Box(740, 275, 100, 100);
    box6 = new Box(740, 175, 100, 100);
    box7 = new Box(670, 75, 100, 100);

    ball = new Ball(320, 200, 50, 50);

    rope1 = new Rope(ball.body, {x: 320, y:100});

    ground = new Ground(600,height,1200,20);

}

function draw(){
    background("white");

    Engine.update(engine);
    ground.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    ball.display();

    rope1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
}

function keyPressed(){
}