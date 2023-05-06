const signupFormHandler = async (event) => {
  event.preventDefault();

  let email = $("#email-signup").val().trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/cheesefolio-update");
    } else {
      alert("User or Email Already Exist.");
    }
  }
};

const checkEmail = async (event) => {
  let email = $("#email-signup").val().trim();
  event.preventDefault();

  const response = await fetch("/api/users/email", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    $("#email-taken").removeClass("hide");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
