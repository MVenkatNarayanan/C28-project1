class Stone{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image=loadImage("Plucking mangoes/stone.png");
        this.pointB = pointB
        this.body= Constraint.create(options);

        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }

    display(){
        imageMode(CENTER)
        image(this.image,102,530,50,50);     
    }
}
