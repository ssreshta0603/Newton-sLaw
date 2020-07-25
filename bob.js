class Bob{
    constructor(x,y){
var options = {
    isStatic:false,
    restitution:1,
    friction:0,
    density:0.8

}
this.body = Bodies.circle(x,y,20,options);

World.add(world,this.body);
    }
     display() {
         var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x,pos.y,20,20);
    
      }
      
      
};