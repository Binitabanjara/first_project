function login() {
    // Temporary frontend login
    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "index.html";
}

function saveUpdate() {
    const mood = document.getElementById("mood").value;
    const message = document.getElementById("message").value;

    if (message === "") {
        alert("Please write something about your day ❤️");
        return;
    }

    alert("Your update has been saved 💕");

    document.getElementById("message").value = "";
}
