/*------------------------
    Global Variables    */

var player;
var weapon;
var bullets = [];
var enemies = [];
var currentWave = {};
var waveNumber = 0;
var enemyCooldown = 0;
var playing=false;
var menu = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    width: 150,
    height: 50
};



/*----------------
    Basic setup */
function setup() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h);
    weapon = new Weapon();
    player = new Player(width / 2, height / 2);

    currentWave = waves[waveNumber];
}



/*----------------
    Game loop   */
function draw() {

    //----------------  Background  ---------------
    background(51);
    //---------------------------------------------


    //-----------------  Bullets  -----------------
    for (var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        if (outOfBounds(bullets[i].x, bullets[i].y)) {
            bullets.splice(i, 1);
        }
    }
    //---------------------------------------------


    //-----------------  Player  ------------------
    player.draw();
    player.weapon.cd--;
    if (mouseIsPressed){
        if(!outOfBounds(mouseX, mouseY))
            player.move();
        if(dist(mouseX,mouseY,width/2,height/2)<=75 && !playing){
            enemyCooldown = 0;
            playing = true;
        }
    }
    if (keyIsDown(32))
        player.shoot();
    //---------------------------------------------


    //-----------------  Enemies  -----------------
    for (var i = enemies.length - 1; i >= 0; i--) {
        enemies[i].move();
        enemies[i].hit();
        if (enemies[i].health <= 0) {
            enemies.splice(i, 1);
        }
    }
    if(playing){
        spawnWave();
    }
    if(enemies.length + currentWave.total <= 0) {
        currentWave = waves[++waveNumber];
        playing = false;
    }
    //---------------------------------------------



    //-----------------  Interace  ----------------

    displayText();

    //---------------------------------------------
}


/*----------------------------------------
    End, rest of code on other files
----------------------------------------*/
