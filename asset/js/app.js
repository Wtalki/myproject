function toggleBtn() {
  let navList = document.querySelector(".nav-list");
  if (!navList.classList.contains("active")) {
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
  }

  let list = navList.querySelectorAll("li");
  list.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.tagName === "LI") {
        navList.classList.remove("active");
      }
    });
  });
}

// SLIDER

const slider = document.querySelector(".slider");
function activate(e) {
  const items = document.querySelectorAll(".item");
  // console.log(items[0]);
  e.target.matches(".item") && slider.append(items[0]);
  // items.forEach(function (item) {
  //   activate.matches;
  // });
}
document.addEventListener("click", activate, false);

// CONTACT

let contactBtn = document.querySelector(".contact");

contactBtn.addEventListener("click", () => {
  let conForm = document.querySelector(".contact-cont");
  let closeBtn = document.querySelector(".close-btn");
  if (conForm.classList.contains("show")) {
    conForm.classList.remove("show");
  } else {
    conForm.classList.add("show");
    closeBtn.addEventListener("click", () => {
      conForm.classList.remove("show");
    });
  }
});
