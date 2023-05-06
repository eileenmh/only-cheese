const pathname = location.pathname;
const href = pathname.substring(1);

const logout = async (event) => {
  console.log("logout function is running");
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

$(document).ready(function () {
  $(`.navbar-item[href="${href}"]`).toggleClass("current-page");

  $("#logout").on("click", logout);

  // On small screens, create toggle for navbar-burger
  $("#burger").on("click", function () {
    $(this).toggleClass("is-active");
    $("#pages").toggleClass("is-active");
  });
});
