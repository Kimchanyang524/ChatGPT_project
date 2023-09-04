const $chat_view = document.querySelector('.chat_view');
const $textarea = document.querySelector('textarea');
const $button = document.querySelector('button');
const $reset = document.querySelector('.reset');
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
const data = [];
const local = window.localStorage;
let key = local.getItem('key');
$chat_view.scrollTop = $chat_view.scrollHeight;

$reset.addEventListener('click', function reset() {
    local.clear();
    $chat_view.innerHTML = '';
    key = 0;
    local.setItem('key', key);
});

function printuser($key) {
    const $user = document.createElement('div');
    $user.className = 'user';
    $user.innerHTML = local.getItem('user' + $key);
    if (local.getItem('chatgpt') != '') {
        $chat_view.appendChild($user);
    }
    $chat_view.scrollTop = $chat_view.scrollHeight;
}

function printgpt($key) {
    const $chatgpt = document.createElement('div');
    $chatgpt.className = 'chatgpt';
    $chatgpt.innerHTML = local.getItem('chatgpt' + $key);
    if (local.getItem('chatgpt') != '') {
        $chat_view.appendChild($chatgpt);
    }
    $chat_view.scrollTop = $chat_view.scrollHeight;
}

function printAll(params) {
    let i = 0;
    while (i <= 100) {
        if (local.getItem('user' + i) == null) {
            break;
        } else {
            console.log(i);
            console.log(local.getItem('user' + i));
        }
        printuser(i);
        i++;
        printgpt(i);
    }
}
printAll();

data.push({
    "role": "system",
    "content": "assistant는 운동 루틴을 추천해주는 트레이너입니다."
})

if ($chat_view.scrollTop != $chat_view.scrollHeight) {

}
$button.addEventListener('click', e => {
    e.preventDefault();
    const contents = $textarea.value.replaceAll('\n', '<br>');
    if (contents.trim() == '') {
        console.log(contents);
        return;
    }
    data.push({
        "role": "user",
        "content": contents
    })
    local.setItem('user' + key, contents);
    $textarea.value = '';
    printuser(key);
    chatGPTAPI();
    key++;
    local.setItem('key', key);
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
            console.log(res)
            let answer = res.choices[0].message.content + '';
            answer2 = answer.replaceAll('\n', '<br>');
            window.localStorage.setItem('chatgpt' + key, answer2);
            printgpt(key);
        })
}