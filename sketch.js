let volume_sl;
let GRID_SIZE = 50;
let tree;
let number = [];
let dir = [];
//let grid = [];
let px = [];
let py = [];
let w; let h; let d;
let playinghat; let playingsnare;
let treemod=[];

function preload() {
  drum[0] = loadSound('assets/hihat.wav');
  drum[1] = loadSound('assets/openhihat.wav');
  drum[2] = loadSound('assets/snare.wav');
  drum[3] = loadSound('assets/kick.wav');
  drum[4] = loadSound('assets/crash.wav');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB);
  frameRate(60);
  //volume slider;
  volume_sl = createSlider(0, 1, 0.5, 0.01);
  volume_sl.position(10, 30);

  for (let i = -50; i<50; i++){
  //  grid[i]=[];
    px[i+50] = 0;
    py[i+50] = 0;
    for (let j = -50; j<50; j++){
    //  grid[i][j] = false;
  }
}

  for (let i = 0; i < 4; i++) {
    if (i < 4) {
      chord[i] = new p5.Oscillator('triangle');
    }
    root[i] = midiToFreq(FMaj[F1[i] - 1]);
    third[i] = midiToFreq(FMaj[F3[i] - 1]);
    fifth[i] = midiToFreq(FMaj[F5[i] - 1]);
    seventh[i] = midiToFreq(FMaj[F7[i] - 1]);
  }




  part = new p5.Part();
  drumPhrase[0] = new p5.Phrase('drum[0]', playHihat, pat[0]);
  part.addPhrase(drumPhrase[0]);
  drumPhrase[1] = new p5.Phrase('drum[1]', playOpen, pat[1]);
  part.addPhrase(drumPhrase[1]);
  drumPhrase[2] = new p5.Phrase('drum[2]', playSnare, pat[2]);
  part.addPhrase(drumPhrase[2]);
  drumPhrase[3] = new p5.Phrase('drum[3]', playKick, pat[3]);
  part.addPhrase(drumPhrase[3]);
  drumPhrase[4] = new p5.Phrase('drum[4]', playCrash, pat[4]);
  part.addPhrase(drumPhrase[4]);

  part.setBPM(30);
  rotz = TWO_PI;
  rotsave = 0;
  left = false;
  right = false;
  chordi = 0;
chordj = chordi % 7;
  tree = -1;
  tx = 0; ty = 0; tz = 0;
  playing = false;
  dirtoken = 0;
  playinghat = false;
  playingsnare = false;

  chord[0].freq(root[chordj]);
  chord[1].freq(third[chordj]);
  chord[2].freq(fifth[chordj]);
  chord[3].freq(seventh[chordj]);
}

function draw() {
chordj = chordi % 4;
  background(217, 240, 255); //sky
  randomSeed(0);

  lights(); //light
  directionalLight(255, 251, 242, 1, 0, -1);

  fill(100);
  noStroke();
camera(0, 500, (height/4) / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  push();

  //translate(0,0,0);
  //rotateZ(PI);
  translate(tx, ty, 0);
  //rotateX(HALF_PI);
  rotateZ(PI);


  // render a building
  for (let i = 0; i<=tree; i++){

    push();
    px[tree+2]=px[tree+1]; //update px;
    py[tree+2]=py[tree+1]; //update py;
    build(i,number[i],dir[i]);
    pop();
  }


  ////////// sound part //////////
  if (playing===true) {
    part.loop();
    chord[0].freq(root[chordj]);
    chord[1].freq(third[chordj]);
    chord[2].freq(fifth[chordj]);
    chord[3].freq(seventh[chordj]);
    //volume part
    for (let i = 0; i < 4; i++) {
      chord[i].amp(0.3 * volume_sl.value(), 0.01 * volume_sl.value());
    }

    for (let i = 0; i < 5; i++) {
      drum[i].setVolume(volume_sl.value());
    }
  }

  ///////////// control part /////////////



  if(playing===true && (drum[0].isPlaying() === true||drum[1].isPlaying() === true)
      &&left == false && right == false &&playinghat == true){
      if(drum[2].isPlaying() === true){ //snare
        treemod[tree] = 1; //evergreen
      }
      else if(drum[4].isPlaying() === true){
        treemod[tree] = 2;
      }
      else if ((drum[0].isPlaying() === true||drum[1].isPlaying() === true)){
        treemod[tree] = 0;
      }
    playChord();
      go = true;
      tree ++;
      number[tree]=0;
      dir[tree] = dirtoken%4;
      switch(dir[tree]){
        case 0:
        py[tree+1] += 1;
        break;
        case 1:
        px[tree+1] += 1;
        break;
        case 2:
        py[tree+1] -= 1;
        break;
        case 3:
        px[tree+1] -= 1;
        break;
      }
      playinghat = false;
  }
  if(playing===true && drum[0].isPlaying() === false&&drum[1].isPlaying()===false&&
  left == false && right == false){
    playinghat = true;
  }

  turnleft(px[tree+1], py[tree+1]);
  turnright(px[tree+1], py[tree+1]);
  gostraight(px[tree+1],py[tree+1]);
}


function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    chordi+=1;
    playChord();
    right = true;
    tree ++;
    number[tree]=1;
    dir[tree] = dirtoken%4;

    switch(dir[tree]){
      case 0: //x++, y+
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
        break;
      case 1: //x+, y--

      //grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
        break;
      case 2: //x--,y-
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
        break;
      case 3: //x-, y++
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
    //  grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
        break;
    }
  }

  if (keyCode === UP_ARROW) {
    playChord();
    gostraight();
      go = true;
      tree ++;
      number[tree]=0;
      dir[tree] = dirtoken%4;
      switch(dir[tree]){
        case 0:
        py[tree+1] += 1;
        break;

        case 1:
        px[tree+1] += 1;
        break;

        case 2:
        py[tree+1] -= 1;
        break;

        case 3:
        px[tree+1] -= 1;
        break;
      }
  }
  else if (keyCode ===RIGHT_ARROW) {
    if (chordi === 0) {
      chordi = 3;
    } else {
      chordi--;
    }
    playChord();
    left = true;
    tree ++;
    number[tree]=2;
    dir[tree] = dirtoken%4;

    switch(dir[tree]){
      case 0: //x--, y+
      //grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      //grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
    //  grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
        break;
      case 1: //x+, y++

    //  grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
    //  grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
  //    grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
        break;
      case 2: //x++,y-
    //  grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
    //  grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
    //  grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
        break;
      case 3: //x-, y--
    //  grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
    //  grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
    //  grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
        break;
      }
  } else if (key === ' ') {
    stopChord();
  }
}
