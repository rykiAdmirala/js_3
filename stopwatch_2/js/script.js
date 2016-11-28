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

	initTime;

var
	stoppedDuration = 0,
	firstStart = true,
	infoItemCounter = 1, // for replicating http://stopwatch.onlineclock.net/new/
	running = false; // flag to know if stopwatch is currently running

function startStop() {
	if (!running) {

		if (firstStart) {
			var dateStarted = new Date();
			timeStarted = dateStarted.getTime();

			firstStart = false;
		};

		if (!dateStopped) {
			stoppedDuration += (new Date() - dateStopped);
		};

		startBtn.innerHTML = 'Stop';
		running = true;

		timerId = setInterval(printTime, 4);

	} else {

		var dateStopped = new Date();
		timeStopped = dateStopped.getTime();

		clearInterval(timerId);
		running = false;


		startBtn.innerHTML = 'Start';
		addInfoItem(stop);


	}

};



function printTime() {

	var curDate = new Date();
	curTime = curDate.getTime(); // current time

	var timeElapsed = curTime - timeStopped - timeStarted;

	var ms = timeElapsed % 1000;
	var s = Math.floor(timeElapsed/1000) % 60;
	var m = ((Math.floor(timeElapsed/1000) - s) / 60) % 60;
	var h = Math.floor(timeElapsed / 360000);

	stopwatch.innerHTML = 
				(h < 10 ? ('0' + h) : h) + ':' + 
				(m < 10 ? ('0' + m) : m) + ':' + 
				(s < 10 ? ('0' + s) : s) + '.' + 
				(ms < 10 ? ('00' + ms) : (ms < 100) ? ('0' + ms) : ms);
}







function split() {
	if (running) {
		addInfoItem();		
	}
};

function reset() {
	clearInterval(timerId);
	running = false;
	time = 0;
	infoItemCounter = 1;
	startBtn.innerHTML = 'Start';
	stopwatch.innerHTML = '00:00:00:00';
	infoBlock.innerHTML = '';
};

// Pass a parametre to the function below if you want to print 'Stop' instead of 'Split'
function addInfoItem(stop) {
	var infoItem = document.createElement('div');
	infoItem.classList.add('info-item');

	if (stop) {
		infoItem.innerHTML = infoItemCounter + ' Stop: ' + currentTime;
	} else {
		infoItem.innerHTML = infoItemCounter + ' Split: ' + currentTime;
	}

	infoBlock.appendChild(infoItem);
	infoItemCounter++;

};

startBtn.addEventListener('click', startStop);
splitBtn.addEventListener('click', split);
resetBtn.addEventListener('click', reset);




/* WORKING TIMER, NO MILLISECONDS 

var 
	stopwatch = document.querySelector('.stopwatch'),
	infoBlock = document.querySelector('.info-block'),
	startBtn = document.querySelector('.start'),
	splitBtn = document.querySelector('.split'),
	resetBtn = document.querySelector('.reset'),
	timerId,
	currentTime;

var
	infoItemCounter = 1, // for replicating http://stopwatch.onlineclock.net/new/
	running = false, // flag to know if stopwatch is currently running
	time = 0,
	h = 0, // hours
	m = 0, // minutes
	s = 0, // seconds
	ss = 0; // milliseconds * 10

function startStop() {
	if (!running) {
		startBtn.innerHTML = 'Stop';
		running = true;

		timerId = setInterval(function() {

			ss = time % 100;
			s = Math.floor(time/100) % 60;
			m = ((Math.floor(time/100) - s) / 60) % 60;
			h = Math.floor(time / 360000);

			stopwatch.innerHTML = 
						(h < 10 ? ('0' + h) : h) + ':' + 
						(m < 10 ? ('0' + m) : m) + ':' + 
						(s < 10 ? ('0' + s) : s) + '.' + 
						(ss < 10 ? ('0' + ss) : ss);

			currentTime = stopwatch.innerHTML;

			time++;
		
		}, 10);

	} else {
		clearInterval(timerId);
		running = false;
		startBtn.innerHTML = 'Start';
		addInfoItem(stop);
	}

};

function split() {
	if (running) {
		addInfoItem();		
	}
};

function reset() {
	clearInterval(timerId);
	running = false;
	time = 0;
	infoItemCounter = 1;
	startBtn.innerHTML = 'Start';
	stopwatch.innerHTML = '00:00:00:00';
	infoBlock.innerHTML = '';
};

// Pass a parametre to the function below if you want to print 'Stop' instead of 'Split'
function addInfoItem(stop) {
	var infoItem = document.createElement('div');
	infoItem.classList.add('info-item');

	if (stop) {
		infoItem.innerHTML = infoItemCounter + ' Stop: ' + currentTime;
	} else {
		infoItem.innerHTML = infoItemCounter + ' Split: ' + currentTime;
	}

	infoBlock.appendChild(infoItem);
	infoItemCounter++;

};

startBtn.addEventListener('click', startStop);
splitBtn.addEventListener('click', split);
resetBtn.addEventListener('click', reset);


*/