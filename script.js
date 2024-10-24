document.addEventListener("DOMContentLoaded", (event) => {
  const signUpButton = document.querySelector(".sign_up_button");

  signUpButton.addEventListener("click", change_style);

  function change_style() {
    signUpButton.classList.toggle("click_active");
  }
});
