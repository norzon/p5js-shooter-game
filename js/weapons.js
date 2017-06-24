var weaponList = [
    {
        cooldown:1,
        power: 1,
        width: 20,
        height: 10
    }
];

class Weapon {
    constructor(w=0) {
        this.current = weaponList[w];
        this.x = -5;
        this.y = -12.5;
    }

    draw() {
        fill(255);
        stroke(0);
        rectMode(CORNER);
        rect(this.x, this.y, this.current.width, this.current.height);
    }
}


class Bullet {
    constructor(posx, posy, x, y) {
        this.x = posx;
        this.y = posy;
        this.target = createVector(x,y);
        this.speed = 5;
        this.size = 10;
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
