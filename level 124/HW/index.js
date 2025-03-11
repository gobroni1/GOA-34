
let messageQueue = [];

function scheduleMessages() {
    const messageInput = document.getElementById('message').value;
    const delayInput = parseInt(document.getElementById('delay').value);

    messageQueue.push({ message: messageInput, delay: delayInput });

    if (messageQueue.length === 1) {
        processMessages();
    }
}

function processMessages() {
    if (messageQueue.length > 0) {
        const { message, delay } = messageQueue[0];

        setTimeout(() => {
            document.getElementById('output').innerText += `${message}\n`;

            messageQueue.shift();

            processMessages();
        }, delay);
    }
}
