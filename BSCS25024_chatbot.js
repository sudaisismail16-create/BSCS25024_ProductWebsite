const messageList = document.querySelector(".chat-box");
const input = document.querySelector(".chat-input input");
const sendButton = document.querySelector(".chat-input button");

sendButton.addEventListener("click", () => {
    if (input.value !== "") {
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<div class="chat-message-text">${input.value}</div>`;
        messageList.appendChild(userMessage);

        const inputText = input.value.toLowerCase();
        let response = "";

        if (inputText.includes("hello") || inputText.includes("hi")) {
            response = "Hello there!";
        } else if (inputText.includes("bye")) {
            response = "Goodbye!";
        } else if (inputText.includes("joke")) {
            response = "Why don't scientists trust atoms? Because they make up everything.";
        } else {
            response = "I don't understand that. Can you try something else?";
        }

        input.value = "";

        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            botMessage.innerHTML = `<div class="chat-message-text">${response}</div>`;
            messageList.appendChild(botMessage);

            messageList.scrollTop = messageList.scrollHeight;
        }, 500);
    }
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
