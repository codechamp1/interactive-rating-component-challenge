const selectRating = rating => {
  localStorage.setItem("selectedRating", rating);
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = false;
  submitBtn.classList.add("animated");
};

const submitRating = () => {
  document.getElementById("card").classList.add("flip");
  document.getElementById("selectedRating").innerHTML =
    localStorage.getItem("selectedRating");
  document.getElementById("frontCard").classList.add("hide");
  document.getElementById("backCard").classList.remove("hide");
};
