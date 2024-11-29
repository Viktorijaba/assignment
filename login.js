const email = document.querySelector(".email input");
const password = document.querySelector(".password input");
const loginBtn = document.querySelector(".button button");
const errorMsg = document.querySelector(".error-message");

loginBtn.onclick = () => {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue.length === 0 || passwordValue.length === 0) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Please fill out all fields";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        (user) => user.email === emailValue && user.password === passwordValue
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        errorMsg.style.display = "block";
        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {

        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Invalid email or password";
    }
};
