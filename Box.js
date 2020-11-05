class Box{
    constructor(x, y, width, height) {
      var options = {
        isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      this.image=loadImage("Dustbin.png");
    }
    display(){
      var pos = this.body.position;
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height);
    }
}