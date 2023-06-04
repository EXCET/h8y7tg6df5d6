var audioPast = new Audio('PastLives.mp3');
var isPlayingPast = false;

function togglePlayPast() {
  if (isPlayingPast) {
    audioPast.pause();
  } else {
    audioPast.play();
  }
  isPlayingPast = !isPlayingPast;
}

function past() {
  togglePlayPast();
}

var audio = new Audio('Flawless.mp3');
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

function music() {
  togglePlay();
}

var audioSorry = new Audio('Sorrybout.mp3');
var isPlayingSorry = false;

function togglePlaySorry() {
  if (isPlayingSorry) {
    audioSorry.pause();
  } else {
    audioSorry.play();
  }
  isPlayingSorry = !isPlayingSorry;
}

function musicsorry() {
  togglePlaySorry();
}


// Volume control
const volumeSlider = document.querySelector(".slider");
const volumeCircle = document.querySelector(".circle");
const audioElement = document.getElementById("audio");
const volumeButton = document.querySelector(".volume_button");

volumeSlider.addEventListener("mousedown", handleVolumeDrag);
volumeSlider.addEventListener("touchstart", handleVolumeDrag);

function handleVolumeDrag(e) {
  e.preventDefault();
  window.addEventListener("mousemove", handleVolumeMove);
  window.addEventListener("touchmove", handleVolumeMove);
  window.addEventListener("mouseup", handleVolumeEnd);
  window.addEventListener("touchend", handleVolumeEnd);
}

function handleVolumeMove(e) {
  const sliderRect = volumeSlider.getBoundingClientRect();
  const sliderWidth = sliderRect.width;
  const offsetX = e.pageX - sliderRect.left;
  const offsetY = e.pageY - sliderRect.top;
  const volume = Math.max(0, Math.min(1, offsetX / sliderWidth));
  audioElement.volume = volume;
  volumeCircle.style.left = `${offsetX}px`;
}

function handleVolumeEnd() {
  window.removeEventListener("mousemove", handleVolumeMove);
  window.removeEventListener("touchmove", handleVolumeMove);
  window.removeEventListener("mouseup", handleVolumeEnd);
  window.removeEventListener("touchend", handleVolumeEnd);
}

volumeButton.addEventListener("click", toggleMute);

function toggleMute() {
  if (audioElement.volume > 0) {
    audioElement.volume = 0;
    volumeCircle.style.left = "0";
  } else {
    audioElement.volume = 1;
    volumeCircle.style.left = `${volumeSlider.offsetWidth}px`;
  }
}

// Get the slider element
var slider = document.querySelector('.slider');


slider.addEventListener('mousedown', startDragging);
slider.addEventListener('mousemove', dragSlider);
slider.addEventListener('mouseup', stopDragging);


var isDragging = false;
var startPosition;
var startSliderPosition;

function startDragging(event) {
  isDragging = true;
  startPosition = event.clientX;
  startSliderPosition = slider.offsetLeft;
}

function dragSlider(event) {
  if (isDragging) {
    var deltaX = event.clientX - startPosition;
    var newPosition = startSliderPosition + deltaX;
    slider.style.left = newPosition + 'px';
  }
}


function stopDragging() {
  isDragging = false;
}


function handleMusicUpload() {
  const fileInput = document.getElementById('music-file');
  const audioPlayer = document.getElementById('audio');

  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      audioPlayer.src = e.target.result;
      audioPlayer.play();
    };

    reader.readAsDataURL(file);
  }
}