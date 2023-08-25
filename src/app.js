const chatBox = document.querySelectorAll('.chat-box')
const sendBtn = document.querySelectorAll('button')
const nameInput = document.querySelectorAll('.name-input')
const messageInput = document.querySelectorAll('.message-input')

function addMessage (nameInputElem, messageInputElem, storageKey, chatBoxElem) {
  const name = nameInputElem.value
  const message = messageInputElem.value

  const messageObj = {
    name,
    message
  }

  const messageArray = JSON.parse(localStorage.getItem(storageKey)) || []
  messageArray.push(messageObj)
  localStorage.setItem(storageKey, JSON.stringify(messageArray))

  nameInputElem.value = ''
  messageInputElem.value = ''

  displayMessages(storageKey, chatBoxElem)
}

function displayMessages (storageKey, chatBoxElem) {
  chatBoxElem.innerHTML = ''

  const messageArray = JSON.parse(localStorage.getItem(storageKey)) || []

  messageArray.forEach(message => {
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `<strong>${message.name}:</strong> ${message.message}`
    chatBoxElem.appendChild(messageElement)
  })
}

sendBtn[0].addEventListener('click', () => {
  addMessage(nameInput[0], messageInput[0], 'mess1', chatBox[1])
})

sendBtn[1].addEventListener('click', () => {
  addMessage(nameInput[1], messageInput[1], 'mess2', chatBox[0])
})

window.addEventListener('DOMContentLoaded', () => {
  displayMessages('mess1', chatBox[1])
  displayMessages('mess2', chatBox[0])
})

nameInput[0].addEventListener('input', () => {
  displayMessages('mess1', chatBox[1])
})

nameInput[1].addEventListener('input', () => {
  displayMessages('mess2', chatBox[0])
})

messageInput[0].addEventListener('input', () => {
  displayMessages('mess1', chatBox[1])
})

messageInput[1].addEventListener('input', () => {
  displayMessages('mess2', chatBox[0])
})
