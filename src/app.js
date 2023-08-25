
const chatBox = document.querySelectorAll('chat-box')
const nameInput = document.querySelectorAll('.name-input')
const messageInput = document.querySelectorAll('.message-input')
const sendBtn = document.querySelectorAll('button')

function addMessageUser1(){
    let messageObj = {
        name: nameInput[0].value,
        message: messageInput[0].value
    }

    let messageArray = JSON.parse(localStorage.getItem('mess1')) || [];
    messageArray.unshift(messageObj);
    localStorage.setItem("mess2", JSON.stringify(messageArray));


}

function addMessageUser2(){
    let messageObj = {
        name: nameInput[1].value,
        message: messageInput[1].value
    }

    let messageArray = JSON.parse(localStorage.getItem('mess2')) || [];
    messageArray.unshift(messageObj);
    localStorage.setItem("mess2", JSON.stringify(messageArray));


}

