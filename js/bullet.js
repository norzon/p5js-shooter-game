class Bullet {
    constructor(posx, posy, x, y) {
        this.x = posx;
        this.y = posy;
        this.target = createVector(x,y);
        this.speed = 10;
        this.size = 10;
        this.damage = weapon.current.power;
    }

    draw() {
        push();
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }

    move() {
        this.x += this.target.x*this.speed;
        this.y += this.target.y*this.speed;
        this.draw();
    }
}
