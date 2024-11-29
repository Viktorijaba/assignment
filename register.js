const email = document.querySelector(".email input");
const passwordOne = document.querySelector(".passwordOne input");
const passwordTwo = document.querySelector(".passwordTwo input");
const registerBtn = document.querySelector(".button button");
const errorMsg = document.querySelector(".error-message");

function validateEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
}

registerBtn.onclick = () => {
    const emailValue = email.value;
    const password1 = passwordOne.value;
    const password2 = passwordTwo.value;


    if (!validateEmail(emailValue)) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Wrong e-mail format";
        return;
    }

    if (password1.length < 4) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Password is too short";
        return;
    }

    if (password1.length > 20) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Password is too long";
        return;
    }

    if (password1 !== password2) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Passwords should match";
        return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
        email: emailValue,
        password: password1,
        profilePicture: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"        };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    errorMsg.style.display = "block";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Account created successfully!";
};
