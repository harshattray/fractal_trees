var slider;
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(51);
    //baseline of the tree
    stroke(255);
    let length = 100;
    line(200,height,200,height-length);
    translate(200,height);
    branch(100);
}
//branch creation
function branch(length){
    line(0,0,0,-length);
    translate(0,-length)
    rotate(PI/4);
    if(length>4){
        branch(length * 0.67)
    }
}
