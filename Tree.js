class Tree{
    constructor(x,y){
       var options={
           isStatic:false
       }
        this.body = Bodies.rectangle(x,y,options);
        this.image=loadImage("Plucking mangoes/tree.png");

        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image,882,466,700,700);

    }
}