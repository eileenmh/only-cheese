async function getCheeses() {
  const cheeseDataRaw = await fetch("/api/cheese/all");
  const cheeseData = await cheeseDataRaw.json();
  for (let i = 0; i < cheeseData.length; i++) {
    $("#cheeses").append(
      `<option value=${cheeseData[i].id}>${cheeseData[i].name}</option>`
    );
  }
}

getCheeses();

const setValues = async (event) => {
  const response = await fetch("/api/users/create-profile", {
    method: "GET",
  });
};

const createProfileFormHandler = async (event) => {
  event.preventDefault();

  let bio = $("#bio").val().trim();
  let city = $("#city").val().trim();
  let state = $("#state").val().trim();
  let cheeses = $("#cheeses").val();

  const response = await fetch("/api/users/create-profile", {
    method: "POST",
    body: JSON.stringify({ bio, city, state, cheeses }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    document.location.replace("/cheesefolio");
  } else {
    alert("There was an error with saving your profile.");
  }
};

$(document).ready(function () {
  $("#create-btn").on("click", createProfileFormHandler);
});
