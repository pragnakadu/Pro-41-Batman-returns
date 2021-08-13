class Umbrella {

    constructor( x , y , r){
   var options= {
        isStatic : true
    }
    this.image = loadImage("images/Walking Frame/walking_1.png")
    this.umbrella = Bodies.circle(x , y , r , options)
    World.add(world,this.umbrella)
}
display(){


imageMode(CENTER)
image( this.image , this.umbrella.position.x , this.umbrella.position.y , 300 , 200)

}


}