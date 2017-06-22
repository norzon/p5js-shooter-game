function mouseInCanvas() {
    return (mouseX<=width && mouseX>=0 && mouseY<=height && mouseY>=0) ? true : false;
}


function keyPressed() {
    if (keyCode===32) {
        player.shoot();
    } else {
        console.log(keyCode);
    }
}
