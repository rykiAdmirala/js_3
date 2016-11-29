var
  stopwatch = document.querySelector('.stopwatch'),
  infoBlock = document.querySelector('.info-block'),
  startBtn = document.querySelector('.start'),
  splitBtn = document.querySelector('.split'),
  resetBtn = document.querySelector('.reset'),
  timerId,
  currentTime,
  timeStarted,
  timeStopped,
  timeResumed;

var
  stoppedDuration = 0,
  firstStart = true,
  running = false, // flag to know if stopwatch is currently running
  infoItemCounter = 1; // for replicating http://stopwatch.onlineclock.net/new/


function startStop() {
  if (!running) { // If stopwatch (SW) is stopped, button is START

    if (firstStart) { // If it's the first time we are starting SW

      firstStart = false;
      timeStarted = new Date();

    } else {  // If we are resuming SW

      timeResumed = new Date();
      stoppedDuration += timeResumed - timeStopped;

    }

    startBtn.innerHTML = 'Stop';
    running = true;
    
    return timerId = setInterval(printTime, 4);

  } else {  // If SW is running, button is STOP

    running = false;
    timeStopped = new Date();
    startBtn.innerHTML = 'Start';
    addInfoItem(stop);

    return clearInterval(timerId);

  }

}


function printTime() {

  currentTime = new Date();

  var timeElapsed = currentTime - stoppedDuration - timeStarted;

  var ms = timeElapsed % 1000;  // milliseconds
  var s = Math.floor(timeElapsed/1000) % 60; // seconds
  var m = ((Math.floor(timeElapsed/1000) - s) / 60) % 60; // minutes
  var h = Math.floor(timeElapsed / 360000); // hours

  return stopwatch.innerHTML =
        (h < 10 ? ('0' + h) : h) + ':' +
        (m < 10 ? ('0' + m) : m) + ':' +
        (s < 10 ? ('0' + s) : s) + '.' +
        (ms < 10 ? ('00' + ms) : (ms < 100) ? ('0' + ms) : ms);
}


function split() {
  if (running) {
    return addInfoItem();
  }
}


function reset() {
  running = false;
  firstStart = true;
  infoItemCounter = 1;
  stoppedDuration = 0;
  timeElapsed = 0;
  startBtn.innerHTML = 'Start';
  stopwatch.innerHTML = '00:00:00.000';
  infoBlock.innerHTML = '';

  return clearInterval(timerId);
}

// Pass a parametre to the function below if you want to print 'Stop' instead of 'Split'
function addInfoItem(stop) {

  var infoItem = document.createElement('div');
  infoItem.classList.add('info-item');
  infoItem.innerHTML = infoItemCounter + (stop ? ' Stop: ' : ' Split: ') + stopwatch.innerHTML;
  infoItemCounter++;

  return infoBlock.appendChild(infoItem);

}


startBtn.addEventListener('click', startStop);
splitBtn.addEventListener('click', split);
resetBtn.addEventListener('click', reset);