const myObserver = new IntersectionObserver((entradas) => {
  entradas.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
const elements2 = document.querySelectorAll(".hidden2");
const elements3 = document.querySelectorAll(".hidden3");

elements.forEach((elements) => myObserver.observe(elements));
elements2.forEach((elements2) => myObserver.observe(elements2));
elements3.forEach((elements3) => myObserver.observe(elements3));
