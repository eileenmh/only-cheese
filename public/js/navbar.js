// On small screens, create toggle for navbar-burger
$(document).ready(function () {
  $("#burger").on("click", function () {
    $(this).toggleClass("is-active");
    $("#pages").toggleClass("is-active");
  });
});
