const headerTop = document.querySelector(".header-top");
const headerBottom = document.querySelector(".header-bottom");
let lastScroll = 0;
let scrollUpCheck = 0;
let i = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (lastScroll < currentScroll) {
    scrollUpCheck = currentScroll;
  }
  lastScroll = currentScroll;

  if (scrollUpCheck - currentScroll < 30 && currentScroll > 30) { 
    headerBottom.classList.add("hidden");
    if (!headerTop.classList.contains("hidden")) {
      i = 0;
      // console.log("A");
    }
  } else { 
    headerBottom.classList.remove("hidden");
    i++;
  }

  // Fade top header
  if (currentScroll > 30) {
    // headerTop.classList.add("hidden");
    headerTop.classList.add('fade-out'); // enable easing
  requestAnimationFrame(() => headerTop.classList.add('hidden'))
  } else {
    // headerTop.classList.remove("hidden");
    headerTop.classList.remove('hidden'); // show instantly
    headerTop.classList.remove('fade-out'); // disable easing again
  }

  // Slide up bottom header when top header hidden and visible long enough
  if (headerTop.classList.contains("hidden") && i >= 4) {
    requestAnimationFrame(() => headerBottom.classList.add("go-top"));
  } else {
    requestAnimationFrame(() => headerBottom.classList.remove("go-top"));
  }
});
