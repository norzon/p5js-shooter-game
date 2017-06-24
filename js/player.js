class Player {

    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
        this.speed = 20;
        this.size = 20;
        this.ease = 0.05;
        this.angle = -PI/2;
        this.weapon = weapon;
    }


    draw() {
        push();
        this.angle = Math.atan2(mouseY-this.y, mouseX-this.x);
        translate(this.x,this.y);
        rotate(this.angle);
        this.weapon.draw();
        fill(255);
        ellipse(0, 0, this.size, this.size);
        pop();
        this.screen();
    }


    screen(){
        push();
        noFill();
        rectMode(CENTER);
        stroke(255);
        rect(this.x, this.y, width/2, height/2);
        pop();
    }


    resetSpeed() {
        this.speed = 20;
    }


    move() {
        var target = createVector(mouseX-this.x, mouseY-this.y);
        target.x = map(target.x,0,width,0,this.speed);
        target.y = map(target.y,0,height,0,this.speed);
        this.x += target.x;
        this.y += target.y;
    }



    shoot() {
        var x = Math.cos(this.angle);
        var y = Math.sin(this.angle);
        push();
        rotate(this.angle);
        var startX = this.x + this.weapon.x*x;
        var startY = this.y + this.weapon.y*y;
        console.log(this);
        console.log(startX);
        console.log(startY);
        bullets.push( new Bullet(startX, startY, x, y) );
        pop();
    }
}
