class particles {
    constructor(x,y,r){
   var option ={
restitution:0.4,
friction:0.4,
density:0.4
  }
    
    this.body = Bodies.circle(x,y,r,option);
    this.r=r;
    this.color=color(random(0, 255),random(0,255),random(0,255));
    World.add(world, this.body);
}
    display () {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    fill(this.color);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0, this.r,this.r);
    pop();
    }
}