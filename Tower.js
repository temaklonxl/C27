class Tower{
    constructor(x, y, width, height){
        this.image = loadImage("assets/tower.png");
        var options = { isStatic:true };
        this.width = width;
        this.height = height;
        
        this.body = rectangle(0, 0, this.width, this.height, options);
        
        World.add(world, this.body);
    }
}
display(){
    var pos = this.body.postion;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}
