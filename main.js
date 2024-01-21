new_song="";
song_1="";
song_2="";
leftWrist_x=0;
leftWrist_y=0;
rightWrist_y=0;
rightWrist_x=0;
score_leftWrist=0;
score_rightWrist=0;
song1_status="";
song2_status="";
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on("pose",got_poses);
}
function model_loaded(){
    console.log("PoseNet is initialized");
}
function got_poses(results){
    score_leftWrist=results[0].pose.keypoints[9].score;
    console.log("Score left wrist="+score_leftWrist);
}
function draw(){
    image(video,0,0,600,500);
    song1_status=song_1.isPlaying();
    if(score_leftWrist>0.2){
        stroke ("black");
        fill("red");
        circle(leftWrist_x,leftWrist_y,20);
        song_2.stop();
        if(song1_status == false)
    { 
        song_1.play();
        document.getElementById("song_name").innerHTML="playing Harry Potter Theme Song";
    }
}

}

                