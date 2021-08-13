const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var maxDrops =100
var drops = []



function preload(){
    
    
}

function setup(){
    engine = Engine.create()
    world= engine.world 
    
    createCanvas(800,1000)
    umbrella = new Umbrella(400, 800 , 50)
    
    if(frameCount% 100 === 0 ){

    for(var i = 0 ; i < maxDrops ; i++){
        drops.push(new createDrop(random(0,400) , random(0,400) , 30 ) )
    }
}
console.log(drops)
}

function draw(){
background("pink")

umbrella.display()
for ( var i = 0 ; i<maxDrops ; i++){
    drops[i].display()
    drops[i].update()
}
 


drawSprites()
}   

