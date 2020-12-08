class Player {
    constructor(){
        this.plrSprite = createSprite(displayWidth/2,displayHeight/2);
        this.health = 100
    }
    display(){
        var pos = this.plrSprite
        ellipseMode(RADIUS);
        fill("lightgreen");
        ellipse(pos.x,pos.y,50,50);

        if(keyDown("w")){
            pos.y -= 5;
        }
        if(keyDown("s")){
            pos.y += 5;
        }
        if(keyDown("a")){
            pos.x -= 5;
        }
        if(keyDown("d")){
            pos.x += 5;
        }

    }
}