class Plinko  {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':1.0,
          'isStatic' : true
      }

      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, 10, options);
      World.add(world, this.body);
    }
    display(){
      fill("white");
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipse(this.x, this.x, 10, 10);
      pop();
    }
    }