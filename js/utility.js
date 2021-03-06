function keyPressed() {
    // if "z" pause
    if (keyCode === 90) {
        playButton();
    } else {
        //console.log(keyCode);
    }
}


function outOfBounds(x, y) {
    return (x > width || x < 0 || y > height || y < 0) ? true : false;
}


function movement(angle, speed = 1) {
    var result = {};
    result.x = speed * Math.cos(angle);
    result.y = speed * Math.sin(angle);
    return result;
}


function getAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}


function spawnEnemy(health = false, speed = false, x = false, y = false) {
    if (!x && !y) {
        var side = floor(random(0, 4));
        var flex = 100;
        switch (side) {
            case 0:
                x = random(-flex, width + flex);
                y = random(-flex, 0);
                side = "Top";
                break;
            case 1:
                x = random(width, width + flex);
                y = random(-flex, height + flex);
                side = "Right";
                break;
            case 2:
                x = random(-flex, width + flex);
                y = random(height, height + flex);
                side = "Bot";
                break;
            case 3:
                x = random(-flex, 0);
                y = random(-flex, height + flex);
                side = "Left";
                break;
            default:
                console.log("error");
                break;
        }
    }

    if (!speed)
        speed = random(1, 3);
    if (!health)
        health = 4 - round(speed);

    //console.log("New enemy at " + side + " with:\nx: " + x + "\ny: " + y + "\ns: " + speed + "\nh: " + health);

    enemies.push(new Enemy(x, y, speed, health));
}


function spawnWave() {
    if (enemyCooldown <= 0) {
        for (var i = 0; i < currentWave.subWave.length; i++) {
            if (currentWave.subWave[i].total > 0) {
                spawnEnemy(currentWave.subWave[i].health, currentWave.subWave[i].speed, currentWave.subWave[i].x, currentWave.subWave[i].y);
                enemyCooldown = currentWave.subWave[i].cooldown;
                if (--currentWave.subWave[i].total <= 0 && currentWave.subTimer != undefined)
                    enemyCooldown = currentWave.subTimer;
                if (--currentWave.total <= 0) {
                    enemyCooldown = Infinity;
                    endOfWave();
                }
                break;
            }
        }
    } else {
        enemyCooldown--;
    }
}


function endOfWave() {
    player.addXp(player.level * 2);
}



function displayText() {
    var t;

    // Wave text
    push();
    if (currentWave.total == Infinity) {
        t = "Wave " + (waveNumber + 1) + ": " + currentWave.total;
    } else {
        t = "Wave " + (waveNumber + 1) + ": " + (enemies.length + currentWave.total);
    }
    textSize(20);
    textAlign(LEFT, CENTER);
    fill(35);
    noStroke();
    rect(5, 5, textWidth(t) + 10, 30);
    fill(255);
    text(t, 10, 20);
    t = "Score: " + score;
    //console.log(width - 10 - textWidth(t));
    text(t, width - 10 - textWidth(t), 20);
    pop();
}


function playButton() {
    $("#menu").toggle();
    playing = !playing;
    updateMenu();
    if (playing) {
        enemyCooldown = 0;
    }
}



function gameover() {
    playButton();
    waveNumber = 0;
    currentWave = JSON.parse(waves)[waveNumber];
    weapon = new Weapon();
    player = new Player(width / 2, height / 2);
    enemies = [];
    ranking.push(score);
    score = 0;
    updateMenu();
}



function levels() {
    return player.level * 5 + 5;
}


function shakeView() {
    if (shakeIt > 0) {
        shakeIt = -5;
    } else {
        shakeIt = 5;
    }
    translate(shakeIt);
}

function unShake() {
    translate(0, 0);
}
