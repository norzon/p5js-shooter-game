/*------------------------
    Global Variables    */

var player;
var weapon;
var bullets = [];


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
        if(!outOfBounds(mouseX, mouseY))
            player.move();
    }

    for (var i = bullets.length-1; i >=0 ; i--) {
        bullets[i].move();
        var x = bullets[i].x
        var y = bullets[i].y;
        if(outOfBounds(x,y)){
            bullets.splice(i, 1);
        }
    }
}


/*----------------------------------------
    End, rest of code on other files
----------------------------------------*/
