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
    $timer[0]++;
}
function hourDown() {
    $timer[0]--;
}
function minuteUp() {
    $timer[1]++;
}
function minuteDown() {
    $timer[1]--;
}
function secondUp() {
    $timer[2]++;
}
function secondDown() {
    $timer[2]--;
}