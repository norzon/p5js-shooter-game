/*------------------------
    Global Variables    */

var player;
var weapon;


/*----------------
    Basic setup */
function setup() {
    createCanvas(600,400);
    weapon = new Weapon();
    player = new Player(width/2, height/2);
}



/*----------------
    Game loop   */
function draw() {
    background(51);
    player.draw();
    if (mouseIsPressed) {
        if(mouseInCanvas())
            player.move();
    }
}


/*----------------------------------------
    End, rest of code on other files
----------------------------------------*/
