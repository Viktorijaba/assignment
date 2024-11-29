const photosContainer = document.querySelector('.photosContainer');
const logoutButton = document.querySelector("#logout");
const userEmailDisplay = document.querySelector("#user-email");
const loggedInUser = localStorage.getItem("currentUser");

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

fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=30")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((product) => {
            photosContainer.innerHTML += `
                <div class="photo">
                    <img src="${product.images[0]}" alt="">
                </div>
            `;
        });
    })