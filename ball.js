class Ball{
    constructor(x,y,radius){
        var options={
          friction:0.3,
          density:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("black");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
};