class String{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
        bodyA:body1,
        bodyB:body2,
      //  length: 50,
      // stiffness:0.04,
        pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;
      
       strokeWeight("2");        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}