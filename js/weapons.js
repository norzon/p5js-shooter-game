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
