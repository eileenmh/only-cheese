async function getCheeses() {
  const cheeseDataRaw = await fetch("/api/cheese/all");
  const cheeseData = await cheeseDataRaw.json();
  for (let i = 0; i < cheeseData.length; i++) {
    $("#cheeses").append(
      `<option value=${cheeseData[i].id}>${cheeseData[i].name}</option>`
    );
  }
}

const createProfileFormHandler = async (event) => {
  event.preventDefault();
  console.log("profile save is running");

  let bio = $("#bio").val().trim();
  let city = $("#city").val().trim();
  let state = $("#state").val().trim();

  const response = await fetch("/api/users/create-profile", {
    method: "POST",
    body: JSON.stringify({ bio, city, state }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // document.location.replace("/cheesefolio");
  } else {
    alert("There was an error with saving your profile.");
  }
};

$("#create-btn").on("click", createProfileFormHandler);

getCheeses();
