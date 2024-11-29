const postContainer = document.querySelector(".postContainer");
const logoutButton = document.querySelector("#logout");
const userEmailDisplay = document.querySelector("#user-email");
const loggedInUser = localStorage.getItem("currentUser");
const post_id = localStorage.getItem("post_id")

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

let post = null

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(res => res.json())
    .then(data => {
        post = data
        postContainer.innerHTML += `<div class="post">
    <div class="post-header">
        <h2 class="post-title">${post.title}</h2>
        <span class="post-id">Post ID: ${post.id}</span>
        <span class="post-user">User ID: ${post.userId}</span>
    </div>
    <div class="post-body">
        <p>${post.body}</p>
    </div>
</div>`
    })