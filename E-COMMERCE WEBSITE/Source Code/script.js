  const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });




  const observerOptions = {
  threshold: 0.4, // trigger when 40% is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

// Observe each girl image and its paired content block
document.querySelectorAll(".girlz img, .content").forEach((el) => {
  observer.observe(el);
});
