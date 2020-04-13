
function house(width, height, depth) {
  box(width, height, depth);
  beginShape(TRIANGLE_FAN);
  let x =random(2, depth / 4);
  let step = TWO_PI / 4;

  let radius = width;//sqrt(pow(width, 2) + pow(height, 2))

    vertex(0, 0, depth);

    for (let i = 0; i<=4; i++){
      let theta = i * step + HALF_PI/2;
  vertex(cos(theta)*radius, sin(theta)*radius, depth/2);

    }
  endShape();
  push();
  translate(width/9*2, height/9*2, depth/3*2);
  box(width/4, height/4, depth/2);
  pop();
}

////////////////////road///////////////////
function verroad(x,y){
push();
translate(x * GRID_SIZE, y * GRID_SIZE, 0);
fill(0);
plane(50,50);
noStroke();
fill('yellow');
plane(5,50);
grid[x][y]=true;
pop();
}

function horroad(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
fill(0);
plane(50,50);
noStroke();
fill('yellow');
plane(50,5);
grid[px][py]=true;
pop();
}


function rightroad0(px, py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50); // first block
  noStroke();
    push(); //yellow line
    translate(0,0,1);
    fill('yellow');
    plane(5,50);
    pop();
    push();
    translate(0, GRID_SIZE, 0);
    fill(0);
    plane(50,50); //second block
      push(); //yellow line
      translate(0,-12.5,1);
      fill('yellow');
      plane(5,28);
      pop();
      push(); //yellow line
      translate(12.5,0,1);
      fill('yellow');
      plane(28,5);
      pop();
    pop();
    push();
    translate(GRID_SIZE, GRID_SIZE, 0);
    fill(0);
    plane(50,50); //third block
    noStroke();
      push();
      translate(0,0,1);
      fill('yellow');
      plane(50,5);
      pop();
    pop();
  pop();
}

function rightroad1(px, py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
fill(0);
plane(50,50); //first block
noStroke();
  push(); //yellow line
  translate(0,0,1);
  fill('yellow');
  plane(50,5);
  pop();

  push();
  translate(GRID_SIZE,0,0);
  fill(0);
  plane(50,50); //second block
    push();
    translate(-12.50,0,1); //yellow line
    fill('yellow');
    plane(28,5);
    pop();
    push();
    translate(0,-12.5,1); //yellow line
    fill('yellow');
    plane(5,28);
    pop();
  pop();

  push();
  translate(GRID_SIZE,-GRID_SIZE,0);
  fill(0);
  plane(50,50); //third block
  noStroke();
    push();
    translate(0,0,1); //yellow line
    fill('yellow');
    plane(5,50);
    pop();
  pop();
pop();
}

function rightroad2(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50); //first block
  noStroke();
    push();
    translate(0,0,1); //yellow line
    fill('yellow');
    plane(5,50);
    pop();

  push();
  translate(0,-GRID_SIZE,0);
  fill(0);
  plane(50,50); //second block
    push();
    translate(0,12.5,1); //yellow line
    fill('yellow');
    plane(5,28);
    pop();
    push();
    translate(-12.5,0,1); //yellow line
    fill('yellow');
    plane(28,5);
    pop();
  pop();

  push();
  translate(-GRID_SIZE,-GRID_SIZE,0);
  fill(0);
  plane(50,50); //third block
  noStroke();
    push();
    translate(0,0,1); //yellow line
    fill('yellow');
    plane(50,5);
    pop();
  pop();
pop();
}

function rightroad3(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50);
  noStroke();
    push();
    translate(0,0,1);
    fill('yellow');
    plane(50,5);
    pop();

    push();
    translate(-GRID_SIZE,0,0);
    fill(0);
    plane(50,50);
      push();
      translate(12.50,0,1);
      fill('yellow');
      plane(28,5);
      pop();
      push();
      translate(0,12.5,1);
      fill('yellow');
      plane(5,28);
      pop();
    pop();

    push();
    translate(-GRID_SIZE,+GRID_SIZE,0);
    fill(0);
    plane(50,50);
    noStroke();
      push();
      translate(0,0,1);
      fill('yellow');
      plane(5,50);
      pop();
    pop();
pop();
}


function leftroad0(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50);
  noStroke();
    push();
    translate(0,0,1);
    fill('yellow');
    plane(5,50);
    pop();

  push();
  translate(0,GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,-12.5,1);
    fill('yellow');
    plane(5,28);
    pop();
    push();
    translate(-12.5,0,1);
    fill('yellow');
    plane(28,5);
    pop();
  pop();

  push();
  translate(-GRID_SIZE, GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,0,1);
    noStroke();
    fill('yellow');
    plane(50,5);
    pop();
  pop();
pop();
}

function leftroad1(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50);
  noStroke();
    push();
    translate(0,0,1);
    fill('yellow');
    plane(50,5);
    pop();

  push();
  translate(GRID_SIZE,0,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,12.5,1);
    fill('yellow');
    plane(5,28);
    pop();
    push();
    translate(-12.5,0,1);
    fill('yellow');
    plane(28,5);
    pop();
  pop();

  push();
  translate(GRID_SIZE, GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,0,1);
    noStroke();
    fill('yellow');
    plane(5,50);
    pop();
  pop();
pop();
}

function leftroad2(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50);
  noStroke();
    push();
    translate(0,0,1);
    fill('yellow');
    plane(5,50);
    pop();

  push();
  translate(0,-GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,12.5,1);
    fill('yellow');
    plane(5,28);
    pop();
    push();
    translate(12.5,0,1);
    fill('yellow');
    plane(28,5);
    pop();
  pop();

  push();
  translate(GRID_SIZE, -GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,0,1);
    noStroke();
    fill('yellow');
    plane(50,5);
    pop();
  pop();
pop();
}

function leftroad3(px,py){
  push();
  translate(px * GRID_SIZE, py * GRID_SIZE, 0);
  fill(0);
  plane(50,50);
  noStroke();
    push();
    translate(0,0,1);
    fill('yellow');
    plane(50,5);
    pop();

  push();
  translate(-GRID_SIZE,0,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,-12.5,1);
    fill('yellow');
    plane(5,28);
    pop();
    push();
    translate(12.5,0,1);
    fill('yellow');
    plane(28,5);
    pop();
  pop();

  push();
  translate(-GRID_SIZE, -GRID_SIZE,0);
  fill(0);
  plane(50,50);
    push();
    translate(0,0,1);
    noStroke();
    fill('yellow');
    plane(5,50);
    pop();
  pop();
pop();
}

//////////////rythm part/////////////
function cherrytree(width, height, depth, x, y) { //hihat
  push();
    rotateX(HALF_PI);
    push();
    translate(x*GRID_SIZE,0,-y*GRID_SIZE);
      push();
      fill(110, 60, 19);
      rotateX(-HALF_PI);
      plane(50,50);
      pop();
    translate(0,height/4,0);
    fill(102, 69, 43);
    cylinder(width / 32, height/2);
      push();
      translate(0, height / 4, 0);
      fill(255, 222, 227);
      ellipsoid(width / 4, height / 4, depth / 6);
      pop();
    pop();
  pop();
  grid[x][y]=true;
}

function evergreen(width, height, depth, /*x, y*/) { //snare
  push();
  rotateX(HALF_PI);
  //translate(x,0,y);
  push();
    fill(110, 60, 19);
  rotateX(-HALF_PI);
  plane(50,50);
  pop();
  translate(0,height/2,0);

  fill(54, 45, 38);
  cylinder(width / 32, height);

  push();
  translate(0, height*0.35, 0);
  fill(51, 112, 29);
  cone(width / 6, height);
  pop();
  pop();
}

function traffic() { //crash
  push();
  rotateX(-HALF_PI);
  fill("grey");
  cylinder(1, 75);

  push();
  translate(10, -35, 0);
  box(20, 5, 1);

  rotateX(HALF_PI);

  push();
  fill("red");
  translate(-6, 1, 0);
  cylinder(2, 2);
  translate(0, -2, 0);
  fill("green");
  cylinder(2, 2);
  pop();

  push();
  fill("yellow");
  translate(0, 1, 0);
  cylinder(2, 2);
  translate(0, -2, 0);
  cylinder(2, 2);
  pop();

  push();
  translate(6, 1, 0);
  fill("green");
  cylinder(2, 2);
  translate(0, -2, 0);
  fill("red");
  cylinder(2, 2);
  pop();

  pop();
  pop();

}



function build(pi,num,dir){
  switch (num){
    case 0: //straight road
    switch(dir){
      case 0: //y++
        verroad(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        break;

      case 1: //x++
        horroad(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi],py[pi]-1);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        break;

      case 2: //y--
      verroad(px[pi],py[pi]);
      cherrytree(w,h,d,px[pi]-1,py[pi]);
      cherrytree(w,h,d,px[pi]+1,py[pi]);
      break;

      case 3: //x--
      horroad(px[pi],py[pi]);
      cherrytree(w,h,d,px[pi],py[pi]-1);
      cherrytree(w,h,d,px[pi],py[pi]+1);
      break;
    }
    break;

    case 1: //right
    switch(dir){
      case 0: //y++
        rightroad0(px[pi],py[pi]);
        break;

      case 1:
        rightroad1(px[pi],py[pi]);
        break;

      case 2:
        rightroad2(px[pi],py[pi]);
        break;

      case 3:
        rightroad3(px[pi],py[pi]);
        break;
    }
    break;

    case 2: //left
    switch(dir){
      case 0: //y++
        leftroad0(px[pi],py[pi]);
        break;

      case 1:
        leftroad1(px[pi],py[pi]);
        break;

      case 2:
        leftroad2(px[pi],py[pi]);
        break;

      case 3:
        leftroad3(px[pi],py[pi]);
        break;
    }
    break;

  }
}
