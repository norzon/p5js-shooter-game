function keyPressed() {
    // if spacebar shoot
    if (keyCode === 32) {
        player.shoot();
    } else if (keyCode === 90) {
        spawnEnemy();
    } else {
        console.log(keyCode);
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


function spawnEnemy() {
    var side = floor(random(0, 4));
    var x, y, flex = 100;
    switch (side) {
        case 0:
            x = random(-flex, width + flex);
            y = random(-flex, 0);
            side = "Top";
            break;
        case 1:
            x = random(width, width+flex);
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

    var speed = random(1, 3);
    var health = floor(random(1, 4));

    //console.log("New enemy at " + side + " with:\nx: " + x + "\ny: " + y + "\ns: " + speed + "\nh: " + health);

    enemies.push(new Enemy(x, y, speed, health));
}
