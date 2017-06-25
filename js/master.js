/*------------------------
    Global Variables    */

var player;
var weapon;
var bullets = [];
var enemies = [];
var currentWave = {};
var waveNumber = 0;
var enemyCooldown = 0;
var playing = false;
var score = 0;
var ranking = [];
var shakeIt;
var shakeTimer = 0;



/*------------------
    Do this first */
function preload() {
    weaponList = JSON.stringify(weaponList);
    waves = JSON.stringify(waves);
}



/*----------------
    Basic setup */
function setup() {

    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h);
    weapon = new Weapon();
    player = new Player(width / 2, height / 2);

    currentWave = JSON.parse(waves)[waveNumber];
}



/*----------------
    Game loop   */
function draw() {

    //----------------  Background  ---------------
    background(51);
    //---------------------------------------------


    //-----------------  Bullets  -----------------
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (playing) {
            bullets[i].move();
            if (outOfBounds(bullets[i].x, bullets[i].y)) {
                bullets.splice(i, 1);
            }
        } else {
            bullets[i].draw();
        }
    }
    //---------------------------------------------


    //-----------------  Player  ------------------
    player.draw();
    player.weapon.cd--;
    if (mouseIsPressed && playing) {
        if (!outOfBounds(mouseX, mouseY))
            player.move();
    }
    if (keyIsDown(32) && playing)
        player.shoot();
    //---------------------------------------------


    //-----------------  Enemies  -----------------
    for (var i = enemies.length - 1; i >= 0; i--) {
        if (playing) {
            enemies[i].move();
            enemies[i].hit();
            if (dist(enemies[i].x, enemies[i].y, player.x, player.y) <= (enemies[i].size + player.size) / 2) {
                if (player.hit(enemies[i])) {
                    break;
                }
            }
            if (enemies[i].health <= 0) {
                score += floor(enemies[i].worth);
                enemies.splice(i, 1);
            }
        } else {
            enemies[i].draw();
        }
    }
    if (playing) {
        spawnWave();
    }
    if (enemies.length + currentWave.total <= 0 && playing) {
        currentWave = JSON.parse(waves)[++waveNumber];
        playButton();
    }
    //---------------------------------------------



    //-----------------  Interace  ----------------

    displayText();

    //---------------------------------------------
}


/*----------------------------------------
    End, rest of code on other files
----------------------------------------*/
