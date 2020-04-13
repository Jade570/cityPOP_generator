let rotz, left, right, rotsave;
let tx, ty, tz;
let go, back;
let dirtoken; //

//&& playing===true && drum[0].isPlaying() === false
function gostraight(x, y) {

  if (go == true) {
    switch(dirtoken % 4){
      case 0:
      //console.log('ty: '+ty+' y: '+y*GRID_SIZE);
        ty += 10;
        if (y*GRID_SIZE-ty <= 0) {
          ty = y*GRID_SIZE;
          go = false;
        }
        break;

      case 1:
        tx += 10;
        if (tx-x*GRID_SIZE >= 0) {
          tx = x*GRID_SIZE;
          go = false;
        }
        break;

      case 2:
        ty -= 10;
        if (ty-y*GRID_SIZE <= 0) {
          ty = y*GRID_SIZE;
          go = false;
        }
        break;

      case 3:
      //console.log('ty: '+tx+' y: '+x*GRID_SIZE);
        tx -= 10;
        if (tx-x*GRID_SIZE <= 0) {
          tx = x*GRID_SIZE;
          go = false;
        }
        break;
    }
  }
}

function turnleft(x, y) {
  //console.log(dirtoken%4);
  if (left == true) {
    rotz += HALF_PI / 10;

    switch (dirtoken % 4) {
      case 0:
      tx-= 10;
      ty+= 5;
        if(rotz%PI>=HALF_PI){
          rotz = HALF_PI;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }

      break;

      case 1:
      tx+= 5;
      ty+= 10;
        if(rotz%PI==0){
          rotz = PI;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }

      break;

      case 2:
      tx+= 10;
      ty-= 5;
        if(rotz%PI>=HALF_PI){
          rotz = HALF_PI*3;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }

      break;

      case 3:
      tx-= 5;
      ty-= 10;
        if(rotz%PI==0){
          rotz = TWO_PI;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }

      break;
    }

/*
      case 0:
        ty += 10;
        tx -= 10;

        if (tx - x*GRID_SIZE <= 0) {
          rotz = rotsave + HALF_PI;
          ty = y*GRID_SIZE;
          tx = x*GRID_SIZE;

          rotsave = rotz;

          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 1:
        ty += 10;
        tx += 10;

        if (ty - y*GRID_SIZE >= 0) {
          rotz = rotsave + HALF_PI;
          ty =  y*GRID_SIZE;
          tx =  x*GRID_SIZE;

          rotsave = rotz;


          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 2:
        ty -= 10;
        tx += 10;

        if (tx - x*GRID_SIZE >= 0) {
          rotz = rotsave + HALF_PI;
          ty =  y*GRID_SIZE;
          tx =  x*GRID_SIZE;

          rotsave = rotz;


          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 3:
        ty -= 10;
        tx -= 10;

        if (ty - y*GRID_SIZE <= 0) {
          rotz = rotsave + HALF_PI;
          ty =  y*GRID_SIZE;
          tx =  x*GRID_SIZE;

          rotsave = rotz;


          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;
    }
    */
  }
}

function turnright(x, y) {
  if (right == true) {
    rotz -= HALF_PI / 10;
    switch (dirtoken % 4) {
      case 0:
      tx+=10;
      ty+=5;
        if (rotz % PI  <= HALF_PI) {
          rotz = HALF_PI*3;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          dirtoken++;
          right = false;
        }
        break;

      case 1:
      tx+=5;
      ty-=10;
        if (rotz % PI == 0) {
          rotz = PI;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          dirtoken++;
          right = false;
        }
        break;

      case 2:
      tx-=10;
      ty-=5;
        if (rotz % PI <= HALF_PI) {
        //  rotz = rotsave - HALF_PI;
          rotz = HALF_PI;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          dirtoken++;
          right = false;
        }
        break;

      case 3:
      tx-=5;
      ty+=10;
        if (rotz % PI == 0) {
          rotz = 0;
          tx = x*GRID_SIZE;
          ty = y*GRID_SIZE;
          rotsave = rotz;
          dirtoken++;
          right = false;
        }
        break;






    }


  }

}
