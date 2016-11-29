var
  stopwatch = document.querySelector('.stopwatch'),
  startBtn = document.querySelector('.start'),
  clearBtn = document.querySelector('.clear'),
  timerId,
  currentTime,
  timeStarted,
  timeStopped,
  timeResumed;

var
  stoppedDuration = 0,
  firstStart = true,
  running = false; // flag to know if stopwatch is currently running


function startPause() {
  if (!running) { // If stopwatch (SW) is stopped (button is START)

    if (firstStart) { // If it's the first time we are starting SW

      firstStart = false;
      timeStarted = new Date();

    } else {  // If we are resuming SW

      timeResumed = new Date();
      stoppedDuration += timeResumed - timeStopped;

    }

    startBtn.innerHTML = 'Pause';
    running = true;
    
    return timerId = setInterval(printTime, 4);

  } else {  // If SW is running (button is PAUSE)

    running = false;
    timeStopped = new Date();
    startBtn.innerHTML = 'Cont...';

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


function clear() {
  running = false;
  firstStart = true;
  stoppedDuration = 0;
  timeElapsed = 0;
  startBtn.innerHTML = 'Start';
  stopwatch.innerHTML = '00:00:00.000';

  return clearInterval(timerId);
}


startBtn.addEventListener('click', startPause);
clearBtn.addEventListener('click', clear);