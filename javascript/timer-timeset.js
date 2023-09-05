const $hourUp = document.querySelector('.hour-up');
const $hourDown = document.querySelector('.hour-down');
const $minuteUp = document.querySelector('.minute-up');
const $minuteDown = document.querySelector('.minute-down');
const $secondUp = document.querySelector('.second-up');
const $secondDown = document.querySelector('.second-down');

$hourUp.addEventListener('click', hourUp);
$hourDown.addEventListener('click', hourDown);
$minuteUp.addEventListener('click', minuteUp);
$minuteDown.addEventListener('click', minuteDown);
$secondUp.addEventListener('click', secondUp);
$secondDown.addEventListener('click', secondDown);

function hourUp() {
    time[0]++;
    time = upMinute(time);
    time = upHour(time);
    clockLoader(time);
}
function hourDown() {
    time[0]--;
    time = downMinute(time);
    time = downHour(time);
    if (time[0] < 0) {
        time[0]++;
        time = upMinute(time);
        time = upHour(time);
        alert('시간은 0 아래로 내려갈 수 없습니다.');
    } else {
        clockLoader(time);
    }
}
function minuteUp() {
    time[1]++;
    time = upMinute(time);
    time = upHour(time);
    clockLoader(time);
}
function minuteDown() {
    time[1]--;
    time = downMinute(time);
    time = downHour(time);
    if (time[0] < 0) {
        time[1]++;
        time = upMinute(time);
        time = upHour(time);
        alert('분은 0 아래로 내려갈 수 없습니다.');
    } else {
        clockLoader(time);
    }
}
function secondUp() {
    time[2]++;
    time = upMinute(time);
    time = upHour(time);
    clockLoader(time);
}
function secondDown() {
    time[2]--;
    time = downMinute(time);
    time = downHour(time);
    if (time[0] < 0) {
        console.log(time);
        time[2]++;
        time = upMinute(time);
        time = upHour(time);
        alert('초는 0 아래로 내려갈 수 없습니다.');
    } else {
        clockLoader(time);
    }
}