const email = document.querySelector("#email-signup").value.trim();
const username = document.querySelector("#username-signup").value.trim();
const password = document.querySelector("#password-signup").value.trim();

const signupFormHandler = async (event) => {
  event.preventDefault();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log(response);
    } else {
      alert("User or Email Already Exist.");
    }
  }
};

const checkEmail = async (event) => {
  console.log("checkEmail function is running");
  event.preventDefault();

  const response = await fetch("/api/users/email", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

$("#email-signup").on("input", checkEmail);
