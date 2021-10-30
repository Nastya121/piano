/*
const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");

const startSound = (event) => {
  event.target.classList.add("active");
}

const stopSound = (event) => {
  event.target.classList.remove("active");
}

const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("active");
  }

  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}

const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}

PIANO.addEventListener("mousedown", startCorrespondOver, false);
PIANO.addEventListener("mouseup", stopCorrespondOver)*/

//------------------------


const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");

const startSound = (event) => {
  event.target.classList.add("active");

}

const stopSound = (event) => {
  event.target.classList.remove("active");
}

const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("active");
  }

  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound)
    elem.addEventListener("mouseout", stopSound)
  });
}

const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound)
    elem.removeEventListener("mouseout", stopSound)
  });
}

PIANO.addEventListener("mousedown", startCorrespondOver, false);
PIANO.addEventListener("mouseup", stopCorrespondOver)

piano.addEventListener('click', (event) => {
  if(event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
  }   
});
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}





function full(){
  if (document.fullscreenElement) {
   document.exitFullscreen();
  } else {
   document.documentElement.requestFullscreen();
  }

 }