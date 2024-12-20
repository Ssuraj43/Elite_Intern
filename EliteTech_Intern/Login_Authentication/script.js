const validCredentials = {
    username: "admin",
    password: "Suraj@123",
  };
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    if (username === validCredentials.username && password === validCredentials.password) {
      alert("Login successful!");
      errorMessage.style.display = "none";
      // Redirecting
    } else {
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
    }
  });
  