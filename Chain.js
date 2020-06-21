class Chain {
    constructor(bodyA,pointB){
      var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:100,
        stiffness:0.399
    }
    this.Chain = Constraint.create(options);
    World.add(world,this.Chain);
    }
  fly(){
      this.Chain.bodyA = null;



  }
  
    display() {
      if(this.Chain.bodyA){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
        
        
    }
  }
