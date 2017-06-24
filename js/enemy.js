class Enemy {
    constructor(x = 0, y = 0, s = 1, h = 1) {
        this.x = x;
        this.y = y;
        this.speed = s;
        this.health = h;
        this.angle;
        this.size = 20;
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
        pop();
    }

    hit() {
        for (var i = bullets.length - 1; i >= 0; i--) {
            if (dist(bullets[i].x, bullets[i].y, this.x, this.y) <= (this.size + bullets[i].size) / 2) {
                this.health -= bullets[i].damage;
                bullets.splice(i, 1);
            }
        }
    }
}
