var weaponList = [
    { cooldown: 15, power: 1, width: 20, height: 10 }
];

class Weapon {
    constructor(w = 0) {
        this.current = JSON.parse(weaponList)[w];
        this.x = -this.current.height / 2;
        this.y = -this.current.width / 1.5;
        this.cd = 0;
    }

    draw() {
        fill(255);
        stroke(0);
        rectMode(CORNER);
        rect(this.x, this.y, this.current.width, this.current.height);
    }
}
