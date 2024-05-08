function login() {
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.body.style.backgroundColor = "pink"; // Change background color to pink
}

function submitUsername() {
    var username = document.getElementById("username").value;
    if (username.trim() !== "") {
        // Redirect the user to the welcome page with the username as a parameter
        window.location.href = "welcome.html?username=" + encodeURIComponent(username);
    } else {
        alert("Please enter a username.");
    }
}

