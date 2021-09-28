class Runner2{
    constructor(x, y, w, h){
        var options = {
            isStatic = true
        };
        
        
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/runner2.gif");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}