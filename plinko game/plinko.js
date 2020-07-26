class Plinko {
    constructor(x,y,r){
    var option ={
    isStatic:true
    }
  
    this.pli=Bodies.circle(x,y,r, option);
    this.r=r;
    World. add(world,this.pli);
}
    display () {
        push();
        //fill(255,255,255);
        ellipseMode(RADIUS);
        ellipse(this.pli.position.x,this.pli.position.y,this.r,this.r);
        pop();
    }
}