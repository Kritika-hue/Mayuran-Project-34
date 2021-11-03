//creating the Player class
class Player{
    //defining the properties (constructor)
    constructor(x,y,w,h){
        //width and height
        this.w = w;
        this.h = h;

        //the abilities the player can do
        /*
        HERE YOU WROTE THIS.OPTIONS WHICH IS INCORRECT
        OPTIONS IS NOT A PROPERTY BUT A JSON OBJECT THAT DEFINES 
        SOME PROPERTIES OF THE BODY THAT WE ARE GOING TO CREATE USING THIS CLASS
        */
        var options = {
            restitution: 0.1,
            frictionAir: 0.01
        }
        //creating the body
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        //adding the body to the world
        World.add(world,this.body);
    }

    //displaying it on the screen
    display(){
        var pos = this.body.position;
        push()
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}