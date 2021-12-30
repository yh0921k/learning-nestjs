const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

//* global socket handler
socket.on('user_connected', (username) => {
  drawNewChat(`${username} connected!`);
});
socket.on('new_chat', ({ chat, username }) => {
  drawNewChat(`${username}: ${chat}`);
});
socket.on('disconnect_user', (username) => {
  drawNewChat(`${username} Bye...`);
});

//* event callback function
const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;
  if (inputValue !== '') {
    socket.emit('submit_chat', inputValue);

    // 화면에 그리기
    drawNewChat(`me : ${inputValue}`);
    event.target.elements[0].value = '';
  }
};

//* draw functions
const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} Stranger :)`);

const drawNewChat = (message) => {
  const wrapperChatBox = document.createElement('div');
  const chatBox = `
      <div>
        ${message}
      </div>
      `;
  wrapperChatBox.innerHTML = chatBox;
  chattingBoxElement.append(wrapperChatBox);
};

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => drawHelloStranger(data)); // 여기서 data는 서버 게이트웨이의 return
}

function init() {
  helloUser();

  // 이벤트 연결
  formElement.addEventListener('submit', handleSubmit);
}

init();
