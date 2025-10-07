const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const pos = window.scrollY;

  if (pos > 30) {
    // user scrolled down — hide header
    header.classList.add("hidden");
  } else {
    // user scrolled up — show header
    header.classList.remove("hidden");
  }
});


