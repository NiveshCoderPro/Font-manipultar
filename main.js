function preload() {

}

function setup() {
    canvas = createCanvas(400,300);
    video = createCapture(VIDEO);
    canvas.position(1000,500);

    video.size(350,350);

    posenet = ml5.poseNet(video)
}

function draw() {

}