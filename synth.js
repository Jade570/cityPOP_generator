let chord = [];
let FMaj = [53, 55, 57, 58, 60, 62, 64, 65];
let F1 = [1, 2, 2, 3, 2, 2, 3];
let F3 = [3, 4, 4, 5, 3, 4, 4];
let F5 = [5, 5, 6, 6, 5, 6, 6];
let F7 = [7, 7, 8, 8, 7, 7, 8];
let circle = [1, 5, 2, 6, 3, 7, 4];

let root = [];
let third = [];
let fifth = [];
let seventh = [];

let sidechain;
let chordi, chordj;
let s = [0, 1];

let playing;

let part;
let drum = []; //0hihat - 1open hihat - 2snare - 3kick - 4crash
let pat = [];
pat[0] = [1, 1, 1, 1];
pat[1] = [0, 0, 0, 0];
pat[2] = [0, 0, 1, 0];
pat[3] = [1, 0, 0, 0];
pat[4] = [0, 0, 0, 0];

let drumPhrase = [];

function playHihat(time, playbackRate) {
  drum[0].rate(playbackRate);
  drum[0].play(time);
}

function playOpen(time, playbackRate) {
  drum[1].rate(playbackRate);
  drum[1].play(time);
}

function playSnare(time, playbackRate) {
  drum[2].rate(playbackRate);
  drum[2].play(time);
}

function playKick(time, playbackRate) {
  drum[3].rate(playbackRate);
  drum[3].play(time);
}

function playCrash(time, playbackRate) {
  drum[4].rate(playbackRate);
  drum[4].play(time);
}

/*
function playpart() {
  userStartAudio();

}
*/

function playChord() {
  userStartAudio();
  chordj = chordi % 7;
  for (i = 0; i < 8; i++) {
    chord[i].start();
  }
  playing = true;
}

function stopChord() {
  userStartAudio();
  playing = false;
  for (i = 0; i < 8; i++) {
    chord[i].stop();
  }
part.pause();

}