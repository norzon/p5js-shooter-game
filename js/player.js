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
        var target = createVector(mouseX-this.x,mouseY-this.y);
        this.angle = Math.atan2(target.y, target.x);
        target.x = map(target.x,0,width,0,this.speed);
        //target.x = target.x*this.ease;
        target.y = map(target.y,0,height,0,this.speed);
        //target.y = target.y*this.ease;
        //console.log(target);
        this.x += target.x;
        this.y += target.y;
    }



    shoot() {
        var x2 = this.x + this.weapon.x + Math.cos(this.angle) * 5;
        var y2 = this.y + this.weapon.y - Math.sin(this.angle) * 5;
        
    }
}
