const $second = document.querySelector('.second');
const $minute = document.querySelector('.minute');
const $hour = document.querySelector('.hour');
const $reset = document.querySelector('.reset');
const alarm = new Audio('../audio/alarm.mp3');

let toggle = null;

let time;

if (!localStorage.getItem('time')) {
    localStorage.setItem('time', JSON.stringify([0, 0, 0]));
}
time = JSON.parse(localStorage.getItem('time'));

function clockLoader($time) {
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
    localStorage.setItem('time', JSON.stringify($time));
}

clockLoader(time);

function upMinute($time) {
    if ($time[2] >= 60) {
        $time[1]++;
        $time[2] -= 60;
    }
    return $time;
}

function upHour($time) {
    if ($time[1] >= 60) {
        $time[0]++;
        $time[1] -= 60;
    }
    return $time;
}

function downMinute($time) {
    if ($time[2] < 0) {
        $time[1]--;
        $time[2] += 60;
    }
    return $time;
}

function downHour($time) {
    if ($time[1] < 0) {
        $time[0]--;
        $time[1] += 60;
    }
    return $time;
}

$reset.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem('time', JSON.stringify([0, 0, 0]));
    time = JSON.parse(localStorage.getItem('time'));
    clockLoader(time);
})