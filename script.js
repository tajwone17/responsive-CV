const toggleButton = document.querySelector(".toggle");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const txt = document.querySelector(".btnTxt");
const profileTxt = document.querySelector(".profile-txt");
const imgbx = document.querySelector(".imgbx");
const contct = document.querySelectorAll(".contactInfo"); // NodeList for contactInfo
const title = document.querySelector(".title");
const edcn = document.querySelector(".education");
const parcnt = document.querySelectorAll(".parcent"); // NodeList for parcent
const lang = document.querySelector(".language");

toggleButton.addEventListener("click", () => {
  const icon = toggleButton.querySelector(".fa");
  console.log("clicked");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    imgbx.classList.remove("imgbx-dark");
    imgbx.classList.add("imgbx");
    title.classList.remove("title-dark");
    edcn.classList.remove("education-dark");

    // Loop through each "parcent" element and remove the dark mode class
    parcnt.forEach((p) => {
      p.classList.remove("parcent-dark");
      p.classList.add("parcent");
    });

    // Loop through each "contactInfo" element and remove the dark mode class
    contct.forEach((c) => {
      c.classList.remove("contactInfo-dark");
      c.classList.add("contactInfo");
    });

    container.classList.add("container");
    container.classList.remove("container-dark");
    rightSide.classList.add("right-side");
    rightSide.classList.remove("right-side-dark");
    leftSide.classList.add("left-side");
    leftSide.classList.remove("left-side-dark");
    profileTxt.classList.add("profile-txt");
    profileTxt.classList.remove("profile-txt-dark");
    txt.classList.remove("btnTxt-dark");
    txt.classList.add("btnTxt");
    title.classList.add("title");
    edcn.classList.add("education");

    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
    txt.innerText = "Dark Mode";
  } else {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
    txt.innerText = "Light Mode";
    imgbx.classList.remove("imgbx");
    imgbx.classList.add("imgbx-dark");

    container.classList.remove("container");
    rightSide.classList.remove("right-side");
    leftSide.classList.remove("left-side");
    profileTxt.classList.remove("profile-txt");
    title.classList.remove("title");
    edcn.classList.remove("education");

    // Loop through each "parcent" element and add the dark mode class
    parcnt.forEach((p) => {
      p.classList.add("parcent-dark");
      p.classList.remove("parcent");
    });

    // Loop through each "contactInfo" element and add the dark mode class
    contct.forEach((c) => {
      c.classList.add("contactInfo-dark");
      c.classList.remove("contactInfo");
    });

    body.classList.add("dark");
    container.classList.add("container-dark");
    rightSide.classList.add("right-side-dark");
    leftSide.classList.add("left-side-dark");
    profileTxt.classList.add("profile-txt-dark");
    txt.classList.remove("btnTxt");
    txt.classList.add("btnTxt-dark");

    title.classList.add("title-dark");
    edcn.classList.add("education-dark");
  }
});
