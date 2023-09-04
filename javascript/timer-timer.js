
const $timerStart = document.querySelector('.timer-start');
const $timerStop = document.querySelector('.timer-stop');

function countTimer($time) {
    toggle = setInterval(() => {
        $time[2]--;
        $time = countMinute($time);
        $time = countHour($time);

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
        if ($time[0] == 0 && $time[1] == 0 && $time[2] == 0) {
            alert('타이머 완료');
            stopTimer();
        }
    }, 1000);
}

function countMinute($time) {
    if ($time[2] < 0) {
        $time[1]--;
        $time[2] += 60;
    }
    return $time;
}

function countHour($time) {
    if ($time[1] < 0) {
        $time[0]--;
        $time[1] += 60;
    }
    return $time;
}

function startTimer() {
    if (!toggle) {
        countTimer($time);
    }
}

function stopTimer() {
    if (toggle) {
        clearInterval(toggle);
        toggle = null;
    }
}

$timerStart.addEventListener('click', startTimer);

$timerStop.addEventListener('click', stopTimer);