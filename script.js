const accordionLink = document.querySelectorAll(".accordion-link");

accordionLink.forEach((accordionLink) => {
  accordionLink.addEventListener("click", () => {
    if (accordionLink.classList.contains(".active")) {
      accordionLink.classList.remove(".active");
    } else {
      const accordionActive = document.querySelectorAll(".active");
      accordionActive.forEach((accordionActive) => {
        accordionActive.classList.remove(".active");
      });
      accordionLink.classList.add(".active");
  
    }
  });
});
