/*------------------------
    Global Variables    */

var player;
var weapon;
var bullets = [];
var enemies = [];


/*----------------
    Basic setup */
function setup() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h);
    weapon = new Weapon();
    player = new Player(width / 2, height / 2);
}



/*----------------
    Game loop   */
function draw() {

    //----------------  Background  ---------------
    background(51);
    //---------------------------------------------


    //-----------------  Player  ------------------
    player.draw();
    if (mouseIsPressed && !outOfBounds(mouseX, mouseY))
        player.move();
    //---------------------------------------------


    //-----------------  Bullets  -----------------
    for (var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        if (outOfBounds(bullets[i].x, bullets[i].y)) {
            bullets.splice(i, 1);
        }
    }
    //---------------------------------------------



    //-----------------  Enemies  -----------------
    for (var i = enemies.length - 1; i >= 0; i--) {
        enemies[i].move();
        enemies[i].hit();
        if (enemies[i].health <= 0) {
            enemies.splice(i, 1);
        }
    }
    //---------------------------------------------
}


/*----------------------------------------
    End, rest of code on other files
----------------------------------------*/
