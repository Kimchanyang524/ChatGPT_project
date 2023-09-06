const $answer = document.querySelector('.answer');
const $button = document.querySelector('button');
const $goal = document.querySelector('#goal');
const $healthStatus = document.querySelector('#healthStatus');
const $exerciseTime = document.querySelector('#exerciseTime');
const $exerciseExperience = document.querySelector('#exerciseExperience');
const $exerciseEquipment = document.querySelector('#exerciseEquipment');
const $diet = document.querySelector('#diet');
const $reset = document.querySelector('.reset');
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const data = [];
const local = window.localStorage;
let key = local.getItem('key');

const systemRequest = `user의 목표는${$goal.value}입니다. 
                        건강 상태는${$healthStatus.value}입니다. 
                        운동 가능한 시간은${$exerciseTime.value}입니다.
                        운동 경험은 ${$exerciseExperience.value}입니다.
                        운동 장비는 ${$exerciseEquipment.value}입니다.
                        식단 여부는 ${$diet.value}입니다.
                        user는 추가적인 질문을 할 수 없으므로, 한번에 완결된 결과를 제출해야합니다. `;

if (local.getItem('plan')) {
    $answer.innerHTML = local.getItem('plan');
}

data.push({
    "role": "system",
    "content": "assistant는 운동 루틴을 추천해주는 트레이너입니다." + systemRequest
})

$button.addEventListener('click', e => {
    e.preventDefault();
    const contents = '적합한 운동을 추천해줘'
    data.push({
        "role": "user",
        "content": contents
    })
    $goal.value = '';
    $healthStatus.value = '';
    $exerciseTime.value = '';
    $exerciseExperience.value = '';
    $exerciseEquipment.value = '';
    $diet.value = '';
    chatGPTAPI();
})

$reset.addEventListener('click', e => {
    e.preventDefault();
    $goal.value = '';
    $healthStatus.value = '';
    $exerciseTime.value = '';
    $exerciseExperience.value = '';
    $exerciseEquipment.value = '';
    $diet.value = '';
    $answer.innerHTML = '이곳에서 운동 가이드라인을 제시해드립니다. 직접 트레이너와 대면하는 것과는 많이 다르기에 무조건 신뢰하는건 추천드리지 않습니다.';
})

function chatGPTAPI() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            let answer = res.choices[0].message.content + '';
            answer = answer.replaceAll('\n', '<br>');
            local.setItem('plan', answer);
            $answer.innerHTML = answer;
        })
}