let rotz, left, right, rotsave;
let tx, ty, tz;
let go, back, versave, horsave;
let dirtoken; //

//&& playing===true && drum[0].isPlaying() === false

function gostraight() {

  if (go == true) {
    switch (dirtoken % 4) {
      case 0: //y++
        ty += BUILDING_MAX_SIZE / 40;
        if (ty - versave >= BUILDING_MAX_SIZE) {
          ty = versave + BUILDING_MAX_SIZE;
          versave = ty;
          go = false;

        }
        break;

      case 1: //x++
        tx += BUILDING_MAX_SIZE / 40;
        if (tx - horsave >= BUILDING_MAX_SIZE) {
          tx = horsave + BUILDING_MAX_SIZE;
          horsave = tx;
          go = false;
        }
        break;

        case 2: //y--
          ty -= BUILDING_MAX_SIZE / 40;
          if (ty - versave <= -BUILDING_MAX_SIZE) {
            ty = versave - BUILDING_MAX_SIZE;
            versave = ty;
            go = false;
          }
          break;

        case 3: //x--
          tx -= BUILDING_MAX_SIZE / 40;
          if (tx - horsave <= -BUILDING_MAX_SIZE) {
            tx = horsave - BUILDING_MAX_SIZE;
            horsave = tx;
            go = false;
          }
          break;
    }
  }

}

function goback() {
  if (back == true) {
    ty -= BUILDING_MAX_SIZE / 40;

    if (ty - versave <= -BUILDING_MAX_SIZE) {
      ty = versave - BUILDING_MAX_SIZE;

      versave = ty;
      back = false;
    }
  }
}

function turnleft() {
  if (left == true) {
    rotz += HALF_PI / 40;

    switch (dirtoken % 4) {
      case 0:
        ty += BUILDING_MAX_SIZE / 40;
        tx -= BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave >= HALF_PI) {
          rotz = rotsave + HALF_PI;
          ty = versave + BUILDING_MAX_SIZE;
          tx = horsave - BUILDING_MAX_SIZE;

          rotsave = rotz;
          versave = ty;
          horsave = tx;

          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 1:
        ty += BUILDING_MAX_SIZE / 40;
        tx += BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave >= HALF_PI) {
          rotz = rotsave + HALF_PI;
          ty = versave + BUILDING_MAX_SIZE;
          tx = horsave + BUILDING_MAX_SIZE;

          rotsave = rotz;
          versave = ty;
          horsave = tx;

          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 2:
        ty -= BUILDING_MAX_SIZE / 40;
        tx += BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave >= HALF_PI) {
          rotz = rotsave + HALF_PI;
          ty = versave - BUILDING_MAX_SIZE;
          tx = horsave + BUILDING_MAX_SIZE;

          rotsave = rotz;
          versave = ty;
          horsave = tx;

          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;

      case 3:
        ty -= BUILDING_MAX_SIZE / 40;
        tx -= BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave >= HALF_PI) {
          rotz = rotsave + HALF_PI;
          ty = versave - BUILDING_MAX_SIZE;
          tx = horsave - BUILDING_MAX_SIZE;

          rotsave = rotz;
          versave = ty;
          horsave = tx;

          if (dirtoken == 0) {
            dirtoken = 3;
          } else {
            dirtoken--;
          }
          left = false;
        }
        break;






    }



  }
}

function turnright() {
  if (right == true) {
    rotz -= HALF_PI / 40;

    switch (dirtoken % 4) {

      case 0:
        ty += BUILDING_MAX_SIZE / 40;
        tx += BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave <= -HALF_PI) {
          rotz = rotsave - HALF_PI;
          ty = versave + BUILDING_MAX_SIZE;
          tx = horsave + BUILDING_MAX_SIZE;



          rotsave = rotz;
          versave = ty;
          horsave = tx;
          dirtoken++;
          right = false;
        }
        break;

      case 1:
        ty -= BUILDING_MAX_SIZE / 40;
        tx += BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave <= -HALF_PI) {
          rotz = rotsave - HALF_PI;
          ty = versave - BUILDING_MAX_SIZE;
          tx = horsave + BUILDING_MAX_SIZE;


          rotsave = rotz;
          versave = ty;
          horsave = tx;
          dirtoken++;
          right = false;
        }
        break;

      case 2:
        ty -= BUILDING_MAX_SIZE / 40;
        tx -= BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave <= -HALF_PI) {
        //  rotz = rotsave - HALF_PI;
          ty = versave - BUILDING_MAX_SIZE;
          tx = horsave - BUILDING_MAX_SIZE;



          rotsave = rotz;
          versave = ty;
          horsave = tx;
          dirtoken++;
          right = false;
        }
        break;

      case 3:
        ty += BUILDING_MAX_SIZE / 40;
        tx -= BUILDING_MAX_SIZE / 40;

        if (rotz - rotsave <= -HALF_PI) {
          rotz = rotsave - HALF_PI;
          ty = versave + BUILDING_MAX_SIZE;
          tx = horsave - BUILDING_MAX_SIZE;



          rotsave = rotz;
          versave = ty;
          horsave = tx;
          dirtoken++;
          right = false;
        }
        break;






    }


  }

}
