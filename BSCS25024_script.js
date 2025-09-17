function greet() {
    alert("Hello, Welcome to Zylans International");
}
// Call greeting when page loads
greet();

// Show current year
document.getElementById("deo").innerHTML = new Date().getFullYear();

// Stock checking function
function getstock(id) {
    let check=document.getElementById(id).textContent;
    if (check.includes('In Stock')){
        alert("Item is in stock");
    } else {
        alert ("Item is out of stock")
    }
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully!");
    document.querySelector("form").reset();
    return false;
}
function send() {
    let input = document.getElementById("msg").value.toLowerCase();
    let chat = document.getElementById("chat");
  
    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chat.appendChild(userMsg);
  
    let botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + reply(input);
    chat.appendChild(botMsg);
  
    document.getElementById("msg").value = "";
}
  