const pathname = location.pathname;
const href = pathname.substring(1);

$(document).ready(function () {
  $(`.navbar-item[href="${href}"]`).toggleClass("current-page");

  // On small screens, create toggle for navbar-burger
  $("#burger").on("click", function () {
    $(this).toggleClass("is-active");
    $("#pages").toggleClass("is-active");
  });
});
