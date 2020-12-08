class Form {
    constructor(){
        this.button = createButton('START');
        this.input = createInput("Enter name");
        this.Title1 = createElement('h2');
        this.objective1 = createElement('h4');
        this.objective2 = createElement('h4');
        this.objective3 = createElement('h4');

    }
    display(){
        this.button.position(displayWidth/2 - 20,displayHeight - 400);
        this.input.position(displayWidth/2 - 30, 200);

        this.Title1.html("Objectives:");
        this.objective1.html("•	Find the keys to open all the doors");
        this.objective2.html("•	Find hidden items to defend yourself from the hunter.");
        this.objective3.html("•	Final Objective is to escape the house.")

        this.Title1.position(displayWidth/2 - 40,290);
        this.objective1.position(displayWidth/2 - 100,320);
        this.objective2.position(displayWidth/2 - 100,350);
        this.objective3.position(displayWidth/2 - 100,380);

        this.button.mousePressed(()=>{
            player1 = new Player();
            gameState = 1;

            this.button.hide();
            this.input.hide();

            this.Title1.position(displayWidth - 100,10);
            this.objective1.position(displayWidth - 140,40);
            this.objective2.position(displayWidth - 140,70);
            this.objective3.position(displayWidth - 140,100)
        })
        

    }

}