const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => console.log(data)); // 여기서 data는 서버 게이트웨이의 return
  socket.on('hello_user', (data) => console.log(data)); // 추가적인 이벤트 핸들러 작업
}

function init() {
  helloUser();
}

init();
