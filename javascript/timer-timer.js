
const $timerStart = document.querySelector('.timer-start');
const $timerStop = document.querySelector('.timer-stop');
const audio = new Audio('../audio/alarm.mp3');

function countTimer($time) {
    toggle = setInterval(() => {
        $time[2]--;
        $time = downMinute($time);
        $time = downHour($time);
        clockLoader($time);
        if ($time[0] == 0 && $time[1] == 0 && $time[2] == 0) {
            audio.play();
            if (!alert('타이머 완료')) {
                audio.pause();
            }
            stopTimer();
        }
    }, 1000);
}

function startTimer() {
    if (!toggle) {
        if (time[0] == 0 && time[1] == 0 && time[2] == 0) {
            audio.play();
            if (!alert('타이머 완료')) {
                audio.pause();
            }
            stopTimer();
        } else {
            countTimer(time);
        }
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