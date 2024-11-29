const logoutButton = document.querySelector("#logout");
const userEmailDisplay = document.querySelector("#user-email");
const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
const oldPassword = document.querySelector("#old-password");
const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");
const profileImage = document.querySelector("#profileImage");

if (loggedInUser) {
    profileImage.src = loggedInUser.profilePicture || "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
    userEmailDisplay.textContent = `${loggedInUser.email}`;
} else {
    window.location.href = "login.html";
}

logoutButton.onclick = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
};

const changeImageButton = document.querySelector("#change-image-btn");
changeImageButton.onclick = () => {
    const newPicture = prompt("Enter URL of your profile picture:");
    if (newPicture) {
        profileImage.src = newPicture;
        loggedInUser.profilePicture = newPicture;
        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

        const users = JSON.parse(localStorage.getItem("users"));
        const userIndex = users.findIndex((user) => user.email === loggedInUser.email);
        users[userIndex].profilePicture = newPicture;
        localStorage.setItem("users", JSON.stringify(users));
    }
};


const changePasswordButton = document.querySelector("#change-password-btn");
const errorMsg = document.querySelector("#error-msg");
changePasswordButton.onclick = () => {
  const  oldPasswordValue = oldPassword.value;
   const newPasswordValue = newPassword.value;
    const confirmPasswordValue = confirmPassword.value;

    if (newPasswordValue !== confirmPasswordValue) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Passwords should match";
        return;
    }
    if (oldPasswordValue !== loggedInUser.password) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Old password is incorrect";
        return;
    }
    if (newPasswordValue.length < 4 || newPasswordValue.length > 20) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.textContent = "Password must be 4-20 characters long";
        return;
    }

    loggedInUser.password = newPasswordValue;
    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((user) => user.email === loggedInUser.email);
    users[userIndex].password = newPasswordValue;
    localStorage.setItem("users", JSON.stringify(users));

    errorMsg.style.display = "block";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Password updated successfully!";

}
