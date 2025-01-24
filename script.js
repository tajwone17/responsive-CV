

const toggleButton = document.querySelector(".toggle");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const leftSide = document.querySelector(".left-side");
const txt = document.querySelector(".btnTxt");

toggleButton.addEventListener("click", () => {
  
  body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");
  leftSide.classList.toggle("dark-mode");


  const icon = toggleButton.querySelector(".fa");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
    txt.innerText = "Dark Mode";
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
    txt.innerText = "Light Mode";
  }
});
