class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,options);     
        this.image=loadImage("Plucking mangoes/mango.png");

        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
       image(this.image,638,288,50,50);
     
    }
}