const mainContainer = document.querySelector(".mainContainer");
const logoutButton = document.querySelector("#logout");
let posts = []

const loggedInUser = localStorage.getItem("currentUser");
const userEmailDisplay = document.querySelector("#user-email");


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

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const post = data[i];
            posts.push(data[i]);
            mainContainer.innerHTML += `<div class="post">
    <div class="post-header">
        <h2 class="post-title">${post.title}</h2>
        <span class="post-id">Post ID: ${post.id}</span>
        <span class="post-user">User ID: ${post.userId}</span>
    </div>
    <div class="post-body">
        <p>${post.body}</p>
    </div>
</div>`
        }

   const allPosts = document.querySelectorAll(".post");
        allPosts.forEach((item, index) => {
            item.onclick = () => {
                localStorage.setItem("post_id", posts[index].id);
                window.location.href = "singlePost.html";
            };
    });

});
