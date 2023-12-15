noseX = 0;
noseY = 0;

function preload() {
disfarce = loadImage('https://i.postimg.cc/1XLTLhZZ/baixados.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 70;
        noseY = results[0].pose.nose.y - 70;
        console.log("nariz x " + noseX + " nariz y " + noseY);
    }
}

function modelLoaded() {
    window.alert("Modelo pronto!")
    console.log("Modelo pronto!")
}

function draw() {
    image(video, 0, 0, 400, 400);
            /*
    fill(255,0,0);
    stroke("red");
    circle(noseX,noseY,20);*/
    image(disfarce,noseX,noseY,150,150);
}

function take_selfie() {
    save("Foto.png");
}