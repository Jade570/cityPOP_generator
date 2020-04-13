
function house(width, height, depth,px ,py ) {
  push();
    translate(px*GRID_SIZE,py*GRID_SIZE,depth/2);
    let r = random(50,205);
    let g = random(50,205);
    let b = random(50,205);
    fill(r-50,g-50,b-50);
    box(width, height, depth);
    fill(r,g,b);
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
    fill(r+50,g+50, b+50);
    translate(width/9*2, height/9*2, depth/3*2);
    box(width/4, height/4, depth/2);
    pop();
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
//grid[x][y]=true;
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
//grid[px][py]=true;
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
    translate(0,depth/2,0);
    fill(102, 69, 43);
    cylinder(width / 16, height*1.5);
      push();
      translate(0, height / 2, 0);
      fill(255, 222, 227);
      ellipsoid(width / 1.5, height / 1.5, depth / 2.5);
      pop();
    pop();
  pop();
  //grid[x][y]=true;
}

function evergreen(width, height, depth, x, y) { //snare
  push();
  rotateX(HALF_PI);
  translate(x*GRID_SIZE,0,-y*GRID_SIZE);
    push();
    fill(110, 60, 19);
    rotateX(-HALF_PI);
    plane(50,50);
    pop();
  translate(0,height/2,0);

  fill(54, 45, 38);
  cylinder(width / 8, height);

    push();
    translate(0, height*0.7, 0);
    fill(51, 112, 29);
    cone(width / 2, height*1.5);
    pop();
  pop();
}

function traffic(x,y) { //crash
  push();
  rotateX(-HALF_PI);

  translate(x*GRID_SIZE,0,y*GRID_SIZE);

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
      switch (treemod[pi]){
        case 0:
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        break;

        case 1:
        w = random(10, GRID_SIZE);
        h = random(10, GRID_SIZE);
        d = random(10, GRID_SIZE);
        evergreen(w,h,d,px[pi]-1,py[pi]);
        w = random(10, GRID_SIZE);
        h = random(10, GRID_SIZE);
        d = random(10, GRID_SIZE);
        evergreen(w,h,d,px[pi]+1,py[pi]);
        break;

        case 2:
        traffic(px[pi]-1,py[pi]);
      }

      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi]+2,py[pi]);
      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi]-2,py[pi]);
      /*
        if(grid[px[pi]-1,py[pi]] == true){
          if(px[pi]-1,py[pi]==true){
            //no tree grown
          }
          else{
            cherrytree(w,h,d,px[pi]+1,py[pi]);
          }
        }
        else if(grid[px[pi]+1][py[pi]]==true){
          cherrytree(w,h,d,px[pi]-1,py[pi]);
        }
        else{
          cherrytree(w,h,d,px[pi]-1,py[pi]);
          cherrytree(w,h,d,px[pi]+1,py[pi]);
        }
*/
        break;

      case 1: //x++
        horroad(px[pi],py[pi]);
        switch (treemod[pi]){
          case 0:
          w = random(5, GRID_SIZE);
          h = random(5, GRID_SIZE);
          d = random(5, GRID_SIZE);
          cherrytree(w,h,d,px[pi],py[pi]-1);
          w = random(5, GRID_SIZE);
          h = random(5, GRID_SIZE);
          d = random(5, GRID_SIZE);
          cherrytree(w,h,d,px[pi],py[pi]+1);
          break;
          case 1:
          w = random(5, GRID_SIZE);
          h = random(5, GRID_SIZE);
          d = random(5, GRID_SIZE);
          evergreen(w,h,d,px[pi],py[pi]-1);
          w = random(5, GRID_SIZE);
          h = random(5, GRID_SIZE);
          d = random(5, GRID_SIZE);
          evergreen(w,h,d,px[pi],py[pi]+1);
          break;
          case 2:
          traffic(px[pi], py[pi]+1);
          break;
        }
        w = random(20, GRID_SIZE);
        h = random(20, GRID_SIZE);
        d = random(20, GRID_SIZE);
        house(w,h,d,px[pi],py[pi]-2);
        w = random(20, GRID_SIZE);
        h = random(20, GRID_SIZE);
        d = random(20, GRID_SIZE);
        house(w,h,d,px[pi],py[pi]+2);
        break;

      case 2: //y--
      verroad(px[pi],py[pi]);
      switch (treemod[pi]){
        case 0:
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        break;

        case 1:
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        evergreen(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        evergreen(w,h,d,px[pi]+1,py[pi]);
        break;

        case 2:
        traffic(px[pi]-1, py[pi]);
        break;
      }

      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi]+2,py[pi]);
      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi]-2,py[pi]);
      break;

      case 3: //x--
      horroad(px[pi],py[pi]);

      switch(treemod[pi]){
        case 0:
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        break;

        case 1:
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        evergreen(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        evergreen(w,h,d,px[pi],py[pi]+1);
        break;

        case 2:
        traffic(px[pi], py[pi]+1);
        break;
      }
      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi],py[pi]-2);
      w = random(20, GRID_SIZE);
      h = random(20, GRID_SIZE);
      d = random(20, GRID_SIZE);
      house(w,h,d,px[pi],py[pi]+2);
      break;
    }
    break;

    case 1: //left
    switch(dir){
      case 0: //y++
        rightroad0(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]+2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]+2);
        for (let i = 0; i<4; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]-2,py[pi]+i);
        }
        for (let i = -1; i<2; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]+3);
        }
        break;

      case 1:
        rightroad1(px[pi],py[pi]);

        cherrytree(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]+1);
        for (let i = -1; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+3,py[pi]+i);
        }
        for (let i = 0; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]+2);
        }

        break;

      case 2:
        rightroad2(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]-2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]-2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]-2);
        for (let i = -3; i<=0; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+2,py[pi]+i);
        }
        for (let i = -1; i<2; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]-3);
        }
        break;

      case 3:
        rightroad3(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]+1);
        for (let i = -2; i<2; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]-3,py[pi]+i);
        }
        for (let i = -3; i<1; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]-2);
        }
        break;
    }
    break;

    case 2: //right
    switch(dir){
      case 0: //y++
        leftroad0(px[pi],py[pi]);

        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]+2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]+2);
        for (let i = 0; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+2,py[pi]+i);
        }
        for (let i = -1; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]+3);
        }
        break;

      case 1:
        leftroad1(px[pi],py[pi]);

        cherrytree(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+2,py[pi]+1);
        for (let i = -2; i<2; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+3,py[pi]+i);
        }
        for (let i = 0; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]-2);
        }
        break;

      case 2:
        leftroad2(px[pi],py[pi]);
        cherrytree(w,h,d,px[pi]-1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]-2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]-2);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]+1,py[pi]-2);
        for (let i = -3; i<1; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]-2,py[pi]+i);
        }
        for (let i = -1; i<2; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]-3);
        }
        break;

      case 3:
        leftroad3(px[pi],py[pi]);

        cherrytree(w,h,d,px[pi],py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi],py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-1,py[pi]+1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]-1);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]);
        w = random(5, GRID_SIZE);
        h = random(5, GRID_SIZE);
        d = random(5, GRID_SIZE);
        cherrytree(w,h,d,px[pi]-2,py[pi]+1);
        for (let i = -1; i<3; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]-3,py[pi]+i);
        }
        for (let i = -3; i<1; i++){
          w = random(20, GRID_SIZE);
          h = random(20, GRID_SIZE);
          d = random(20, GRID_SIZE);
          house(w,h,d,px[pi]+i,py[pi]+2);
        }

        break;
    }
    break;

  }
}
