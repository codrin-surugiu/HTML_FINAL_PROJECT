const accordionLink = document.querySelectorAll(".accordion-link");

accordionLink.forEach((accordionLink, index) => {
  accordionLink.addEventListener("click", () => {
    const divCurrentActive = document.querySelector(".active");
    const divCurrent = document.querySelectorAll(".answer")[index];
    if (divCurrentActive === divCurrent) {
      divCurrent.classList.remove("active");
    } else {
      if (!divCurrentActive) {
        divCurrent.classList.add("active");
      } else {
        divCurrentActive.classList.remove("active");
        divCurrent.classList.add("active");
      }
    }
  });
});
