
const $stopWatchStart = document.querySelector('.stopWatch-start');
const $stopWatchStop = document.querySelector('.stopWatch-stop');

function countStopWatch($time) {
    toggle = setInterval(() => {
        $time[2]++;
        $time = stopWatchMinute($time);
        $time = stopWatchHour($time);
        if ($time[0] < 10) {
            $hour.innerHTML = '0' + $time[0] + 'h';
        } else {
            $hour.innerHTML = $time[0] + 'h';
        }
        if ($time[1] < 10) {
            $minute.innerHTML = '0' + $time[1] + 'm';
        } else {
            $minute.innerHTML = $time[1] + 'm';
        }
        if ($time[2] < 10) {
            $second.innerHTML = '0' + $time[2] + 's';
        } else {
            $second.innerHTML = $time[2] + 's';
        }
    }, 1000);
}

function stopWatchMinute($time) {
    if ($time[2] >= 60) {
        $time[1]++;
        $time[2] -= 60;
    }
    return $time;
}

function stopWatchHour($time) {
    if ($time[1] >= 60) {
        $time[0]++;
        $time[1] -= 60;
    }
    return $time;
}

function startStopWatch() {
    if (!toggle) {
        countStopWatch($time);
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