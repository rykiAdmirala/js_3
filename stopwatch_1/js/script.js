var stopwatch = document.querySelector('.stopwatch'),
		startBtn = document.querySelector('.start'),
		stopBtn = document.querySelector('.stop'),
		timerId;

var running = false, // flag to know if stopwatch is currently running
		time = 0,
		h = 0, // hours
		m = 0, // minutes
		s = 0, // seconds
		ss = 0; // milliseconds * 10

function startPause() {
	if (!running) {
		startBtn.innerHTML = 'Pause';
		running = true;

		timerId = setInterval(function() {

			ss = time % 100;
			s = Math.floor(time/100) % 60;
			m = ((Math.floor(time/100) - s) / 60) % 60;
			h = Math.floor(time / 360000);

			stopwatch.innerHTML = 
						(h < 10 ? ('0' + h) : h) + ':' + 
						(m < 10 ? ('0' + m) : m) + ':' + 
						(s < 10 ? ('0' + s) : s) + 
						'<span class="ms">' + (ss < 10 ? ('0' + ss) : ss) + '</span>';

			time++;
		
		}, 10);

	} else {
		startBtn.innerHTML = 'Start';
		running = false;
		clearInterval(timerId);
	}

};

function stop() {
	clearInterval(timerId);
	running = false;
	time = 0;
	startBtn.innerHTML = 'Start';
	stopwatch.innerHTML = '00:00:00<span class="ms">00</span>';
}



startBtn.addEventListener('click', startPause);
stopBtn.addEventListener('click', stop);