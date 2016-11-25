var h = document.querySelector('.hours');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var mSec = document.querySelector('.m-sec');
var startBtn = document.querySelector('.start');
var splitBtn = document.querySelector('.split');
var timer = document.querySelector('.timer');
var startBtn = document.querySelector('.start');
var stopBtn = document.querySelector('.stop');
var resetBtn = document.querySelector('.reset');
var mSecs = 0;
var secs = 0;
var mins = 0;
var hours = 0;

function startPause() {	
	mSecs++;
	if (mSecs >= 100) {
		mSecs = 0;
		secs++;
		if (secs >= 60) {
			secs = 0;
			mins++;
			if (mins >= 60) {
				mins = 0;
				hours++;
				if (hours >= 24) {
					hours = 0;
				}
			}
		}
	}

	if (hours < 10) {
		hours = '0' + hours;
	}
	if (mins < 10) {
		mins = '0' + mins;
	}
	if (secs < 10) {
		secs = '0' + secs;
	}
	if (mSecs < 10) {
		mSecs = '0' + mSecs;
	}

	timer.innerHTML = hours + ':' + mins + ':' + secs + ':' + mSecs;

	setTimeout(startPause, 10);
}

setTimeout(startPause, 10);






// startBtn.addEventListener('click', setTimeout(timer, 10))