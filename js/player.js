class Player {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.size = 20;
        this.ease = 0.05;
        this.angle = -PI / 2;
        this.weapon = weapon;
        this.health = 5;
        this.invulnerable = 0;
        this.invTime = 0.5;
    }


    draw() {
        push();
        this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
        translate(this.x, this.y);
        rotate(this.angle);
        this.weapon.draw();
        if (this.invulnerable > 0) {
            fill(color("rgba(255,255,255,0.6)"));
            this.invulnerable--;
        } else {
            fill(255);
        }
        ellipse(0, 0, this.size, this.size);
        pop();
        push();
        noStroke();
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.health, this.x, this.y);
        pop();
        //this.screen();
    }


    screen() {
        push();
        noFill();
        rectMode(CENTER);
        stroke(255);
        ellipse(this.x, this.y, width / 2, height / 2);
        pop();
    }


    resetSpeed() {
        this.speed = 5;
    }


    move() {
        var move = movement(this.angle, this.speed);
        if (dist(mouseX, mouseY, this.x, this.y) < this.speed) {
            move.x = move.y = 0;
        }
        this.x += move.x;
        this.y += move.y;
    }



    shoot() {
        if (this.weapon.cd <= 0) {
            var x = Math.cos(this.angle);
            var y = Math.sin(this.angle);
            // push();
            // rotate(this.angle);
            var startX = this.x + this.weapon.x * x;
            var startY = this.y + this.weapon.y * y;
            // console.log(this);
            // console.log(startX);
            // console.log(startY);
            bullets.push(new Bullet(startX, startY, x, y));
            this.weapon.cd = this.weapon.current.cooldown;
            // pop();
        }
    }



    hit(enemy) {
        if (this.invulnerable <= 0) {
            if (--this.health <= 0) {
                gameover();
                return true;
            } else {
                this.invulnerable = frameRate() * this.invTime;
                this.knockBack(enemy.x, enemy.y, enemy.speed);
            }
        }
        return false;
    }


    knockBack(x, y, speed = this.speed) {
        var angle = getAngle(x, y, this.x, this.y);
        var move = movement(angle, speed * 20);
        this.x += move.x;
        this.y += move.y;
    }
}
