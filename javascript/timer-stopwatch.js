
const $stopWatchStart = document.querySelector('.stopWatch-start');
const $stopWatchStop = document.querySelector('.stopWatch-stop');

function countStopWatch($time) {
    toggle = setInterval(() => {
        $time[2]++;
        $time = upMinute($time);
        $time = upHour($time);
        clockLoader($time);
    }, 1000);
}

function startStopWatch() {
    if (!toggle) {
        countStopWatch(time);
    }
}

function stopStopWatch() {
    if (toggle) {
        clearInterval(toggle);
        toggle = null;
    }
}

$stopWatchStart.addEventListener('click', startStopWatch);

$stopWatchStop.addEventListener('click', stopStopWatch);