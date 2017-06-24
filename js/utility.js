function mouseInCanvas() {
    return (mouseX<=width && mouseX>=0 && mouseY<=height && mouseY>=0) ? true : false;
}


function keyPressed() {
    // if spacebar shoot
    if (keyCode===32) {
        player.shoot();
    } else {
        console.log(keyCode);
    }
}


function outOfBounds(x,y) {
    return (x > width || x < 0 || y > height || y < 0) ? true : false;
}
