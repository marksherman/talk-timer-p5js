let startMinutes = 5;
let startSeconds = 0;

let viewer;
let resetButton;
let startButton;

let startTime = 0;
let timerRunning = false;
let timerMinutes = 0;
let timerSeconds = 0;

let windowTimer;

let alertSound;
let hasAlertSounded = false;

let finishSound;

function preload() {
  alertSound = loadSound('alert-short.m4a');
  finishSound = loadSound('AirHorn.mp3');
}

function setup() {
  noCanvas();
  frameRate(10);

  viewer = createDiv('5:00');
  viewer.style('font-family', 'monospace');
  viewer.style('font-size', '40vw');
  viewer.style('padding-top', '5%');
  viewer.style('padding-bottom', '5%');
  setNormalColor();

  resetButton = createButton('Reset');
  resetButton.style('margin', '10px');
  resetButton.mouseClicked(resetTimer);

  startButton = createButton('Start');
  startButton.style('margin','10px');
  startButton.mouseClicked(startButtonPressed);

  resetTimer();
}

function draw() {
  viewer.html(nf(timerMinutes, 1, 0).concat(':', nf(timerSeconds, 2, 0)));
  
  if (timerMinutes < 1 && timerSeconds < 30) {
    setCriticalColor();
  } else {
    setNormalColor();
  }

  if (timerMinutes < 1 && timerSeconds < 30 && hasAlertSounded === false) {
    alertSound.play();
    hasAlertSounded = true;
    print('sound alert');
  }
}

function resetTimer() {
  print('reset');
  stopTimer();
  timerMinutes = startMinutes;
  timerSeconds = startSeconds;
  hasAlertSounded = false;
}

function startButtonPressed() {
  if (timerRunning) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (!timerRunning) {
    print('start');
    startButton.html('Stop');
    timerRunning = true;
    windowTimer = window.setInterval(update, 1000);
  }
}

function stopTimer() {
  if (timerRunning) {
    print('stop');
    window.clearInterval(windowTimer);
    startButton.html('Start');
    timerRunning = false;
  }
}

function update () {
  timerSeconds -= 1;

  // decrement minutes when seconds drops below zero
  if (timerSeconds < 0 && timerMinutes > 0) {
    timerMinutes -= 1;
    timerSeconds = 60 + timerSeconds;
  }

  // make sure we can never go below zero on total time
  if (timerMinutes <= 0 && timerSeconds <= 0) {
    stopTimer();
    timerMinutes = 0;
    timerSeconds = 0;
    finishSound.play();
  }
}

function setNormalColor() {
  viewer.style('background-color', 'black');
  viewer.style('color', 'white');
}

function setCriticalColor() {
  viewer.style('background-color', 'red');
  viewer.style('color', 'black');
}