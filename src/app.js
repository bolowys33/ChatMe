
const chatBox = document.querySelectorAll('.chat-box')
const sendBtn = document.querySelectorAll('button')
const nameInput = document.querySelectorAll('.name-input')
const messageInput = document.querySelectorAll('.message-input')

function addMessageUser1(){
    let name = nameInput[0].value
    let message = messageInput[0].value

    let messageObj = {
        name: name,
        message: message
    }

    let messageArray = JSON.parse(localStorage.getItem('mess1')) || [];
    messageArray.unshift(messageObj);
    localStorage.setItem("mess1", JSON.stringify(messageArray));
    displayMessages2()
}

function addMessageUser2(){
    let name = nameInput[1].value
    let message = messageInput[1].value

    let messageObj = {
        name: name,
        message: message
    }

    let messageArray = JSON.parse(localStorage.getItem('mess2')) || [];
    messageArray.unshift(messageObj);
    localStorage.setItem("mess2", JSON.stringify(messageArray));
    displayMessages1()
}

function displayMessages1() {
    chatBox[0].innerHTML = "";

    let messageArray = JSON.parse(localStorage.getItem('mess1'))

    messageArray.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
        chatBox[0].appendChild(messageElement);
    });
}

function displayMessages2(messages) {
    chatBox[1].innerHTML = "";

    let messageArray = JSON.parse(localStorage.getItem('mess2'))

    messageArray.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
        chatBox[1].appendChild(messageElement);
    });
}

sendBtn[0].addEventListener('click',addMessageUser1)
sendBtn[1].addEventListener('click',addMessageUser2)

window.addEventListener('DOMContentLoaded',() =>{
    displayMessages1()
    displayMessages2()
})