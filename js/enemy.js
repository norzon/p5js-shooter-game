class Enemy {
    constructor(x = 0, y = 0, s = 1, h = 1) {
        this.x = x;
        this.y = y;
        this.speed = s;
        this.health = h;
        this.angle;
        this.size = 20;
        this.worth = this.speed * this.health;
    }


    move() {
        this.angle = getAngle(this.x, this.y, player.x, player.y);
        var move = movement(this.angle, this.speed);
        this.x += move.x;
        this.y += move.y;
        this.draw();
    }


    draw() {
        push();
        fill(color("brown"));
        stroke(255);
        ellipse(this.x, this.y, this.size);
        noStroke();
        fill(255);
        textAlign(CENTER, CENTER);
        text(this.health, this.x, this.y);
        pop();
    }

    hit() {
        for (var i = bullets.length - 1; i >= 0; i--) {
            if (dist(bullets[i].x, bullets[i].y, this.x, this.y) <= (this.size + bullets[i].size) / 2) {
                this.health -= bullets[i].damage;
                this.knockBack();
                bullets.splice(i, 1);
                player.addXp();
            }
        }
    }

    knockBack() {
        var angle = getAngle(player.x, player.y, this.x, this.y);
        var move = movement(angle, this.speed * 10);
        this.x += move.x;
        this.y += move.y;
    }
}
