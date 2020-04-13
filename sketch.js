let volume_sl;
let GRID_SIZE = 50;
let CITY_SIZE = 100;
let BUILDING_MAX_SIZE = 40;
let gridSz = CITY_SIZE / BUILDING_MAX_SIZE;
let map = [];
let cam;
let tree;
let Draw;
let ever = [];
let objx = []; let objy = [];
let number = [];
let dir = [];
let grid = [];
let px = [];
let py = [];
let w; let h; let d;

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

  //volume slider;
  volume_sl = createSlider(0, 1, 0, 0.01);
  volume_sl.position(10, 30);

  for (let i = -50; i<50; i++){
    grid[i]=[];
    px[i+50] = 0;
    py[i+50] = 0;
    for (let j = -50; j<50; j++){
      grid[i][j] = false;
  }
}



  for (let i = 0; i < 8; i++) {
    if (i < 4) {
      chord[i] = new p5.Oscillator('sawtooth');
    } else {
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

  part.setBPM(60);
  rotz = 0;
  rotsave = 0;
  versave=0;
  horsave=0;
  left = false;
  right = false;
  chordi = 1;
  tree = -1;
  tx = 0; ty = 0; tz = 0;
  playing = false;
  dirtoken = 0;

}

function draw() {

  background(217, 240, 255); //sky
  randomSeed(0);

  lights(); //light
  directionalLight(255, 251, 242, 1, 0, -1);

  fill(100);
  noStroke();
  //plane(10000, 10000); // draw ground
  //camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  push();
  translate(tx, ty, tz);
  rotateZ(rotz);


  // randomly determine building dimensions
// building height

  // render a building
  for (let i = 0; i<=tree; i++){
    w = random(5, GRID_SIZE);
    h = random(5, GRID_SIZE);
    d = random(5, GRID_SIZE);
    push();
    px[tree+2]=px[tree+1]; //update px;
    py[tree+2]=py[tree+1]; //update py;
    build(i,number[i],dir[i]);
    pop();
  }

//console.log('w: '+w+' h: '+h+' d: '+d);


  ////////// sound part //////////
  if (playing===true) {
    part.loop();
    chord[0].freq(root[chordj % 7]);
    chord[1].freq(third[chordj % 7]);
    chord[2].freq(fifth[chordj % 7]);
    chord[3].freq(seventh[chordj % 7]);
    chord[4].freq(root[chordj % 7]);
    chord[5].freq(third[chordj % 7]);
    chord[6].freq(fifth[chordj % 7]);
    chord[7].freq(seventh[chordj % 7]);
    //volume part
    for (let i = 0; i < 4; i++) {
      chord[i].amp(0.05 * volume_sl.value(), 0.01 * volume_sl.value());
    }
    for (let i = 4; i < 8; i++) {
      chord[i].amp(0.4 * volume_sl.value(), 0.1 * volume_sl.value());
    }
    for (let i = 0; i < 5; i++) {
      drum[i].setVolume(volume_sl.value());
    }
  }

  ///////////// control part /////////////
  turnleft();
  turnright();
  gostraight();
  goback();
}


function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    chordi++;
    playChord();
    right = true;
    tree ++;
    number[tree]=1;
    dir[tree] = dirtoken%4;

    switch(dir[tree]){
      case 0: //x++, y+
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
        break;
      case 1: //x+, y--

      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
        break;
      case 2: //x--,y-
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
        break;
      case 3: //x-, y++
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
        break;
    }
  }

  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    playChord();
    if(keyCode === UP_ARROW){
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
    else{
      goback();
      back = true;
    }
  }
  else if (keyCode === LEFT_ARROW) {
    if (chordi === 0) {
      chordi = 6;
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
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
        break;
      case 1: //x+, y++

      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]+=1;
        break;
      case 2: //x++,y-
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
      grid[px[tree]][py[tree]]=true;
      px[tree+1]+=1;
        break;
      case 3: //x-, y--
      grid[px[tree]][py[tree]]=true;
      px[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
      grid[px[tree]][py[tree]]=true;
      py[tree+1]-=1;
        break;
      }
  } else if (key === ' ') {
    stopChord();
  }
console.log("px: "+px[tree]+" py: "+py[tree]);
}
