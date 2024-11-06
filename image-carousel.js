const slideshow = document.querySelectorAll(".slides img");
const navigationDots = document.querySelector(".dots");

let i = 0;
let intervalID = undefined;

slideshow[i].classList.add("visible");

const updateIndex = (step) => {
  i = (i + step + slideshow.length) % slideshow.length;
  displaySlide(i);
};

const nextSlide = () => {
  updateIndex(1);
};

const prevSlide = () => {
  autoNext(false);
  updateIndex(-1);
};

document.querySelector("#left").addEventListener("click", prevSlide);
document.querySelector("#right").addEventListener("click", () => {
  nextSlide();
  autoNext(true);
});

const displaySlide = (index) => {
  slideshow.forEach((slide) => {
    slide.classList.remove("visible");
  });
  navigationDots.childNodes.forEach((dot) => {
    dot.innerText = "radio_button_unchecked";
  });
  slideshow[index].classList.add("visible");
  navigationDots.children[index].innerText = "radio_button_checked";
};

const createDots = () => {
  for (let n = 0; n < slideshow.length; n++) {
    const dot = document.createElement("span");
    dot.classList.add("material-symbols-outlined");
    dot.setAttribute("data-slide", n);
    dot.innerText = "radio_button_unchecked";
    dot.addEventListener("click", () => {
      displaySlide(Number(dot.getAttribute("data-slide")));
      autoNext(false);
    });
    navigationDots.appendChild(dot);
  }
  navigationDots.children[i].innerText = "radio_button_checked";
};
createDots();

const autoNext = (lever) => {
  clearInterval(intervalID);
  if (lever) intervalID = setInterval(nextSlide, 5000);
};

autoNext(true);
