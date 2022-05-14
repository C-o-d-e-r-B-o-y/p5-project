function preload(){

}

function setup(){
    canvas = createCanvas(750, 590);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 259, 190, 200, 180);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(100,100,100);
    fill(34,139,34);
    stroke(34,139,34);
    rect(150,86,400,30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(100,100,100);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(600,100,100);
    fill(34,139,34);
    stroke(34,139,34);
    rect(150,486,400,30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(100,500,100);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(600,500,100);
    fill(34,139,34);
    stroke(34,139,34);
    rect(85,150,30,300);
    fill(34,139,34);
    stroke(34,139,34);
    rect(585,150,30,300);
}

function take_snapshot(){
    save('My_filter.png');
}

