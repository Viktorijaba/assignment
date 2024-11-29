const logoutButton = document.querySelector("#logout");
const userEmailDisplay = document.querySelector("#user-email");
const loggedInUser = localStorage.getItem("currentUser");
const sendButton = document.querySelector("#sendButton");
const messageInput = document.querySelector("#messageInput");
const messages = document.querySelector(".messages");

if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    userEmailDisplay.textContent = `${user.email}`;
} else {
    window.location.href = "login.html";
}

logoutButton.onclick = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
};

function getCurrentDate() {
    const timestamp = Date.now();
    const currentDate = new Date(timestamp);
    return currentDate.toLocaleString();
}

sendButton.onclick = () => {
    const msg = messageInput.value;
    if (msg === "") {
        alert("This field can't be empty!");
        return;
    }
    const timestamp = getCurrentDate();

    messages.innerHTML += `
        <div class="message">
            <p>${msg}</p>
            <span class="timestamp">${timestamp}</span>
        </div>
    `;
    messageInput.value = "";
};
