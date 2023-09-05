
const $timerStart = document.querySelector('.timer-start');
const $timerStop = document.querySelector('.timer-stop');

function countTimer($time) {
    toggle = setInterval(() => {
        $time[2]--;
        $time = downMinute($time);
        $time = downHour($time);
        clockLoader($time);
        if ($time[0] == 0 && $time[1] == 0 && $time[2] == 0) {
            alert('타이머 완료');
            stopTimer();
        }
    }, 1000);
}

function startTimer() {
    if (!toggle) {
        countTimer(time);
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