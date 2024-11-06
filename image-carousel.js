const slideshow = document.querySelectorAll(".slides img");
const navigationDots = document.querySelector(".dots");

let i = 0;
let intervalID = undefined;

slideshow[i].classList.add("visible");

const prevSlide = () => {
  if (i === 0) {
    i = slideshow.length - 1;
  } else {
    i--;
  }
  autoNext(false);
  displaySlide(i);
};

document.querySelector(".previous").addEventListener("click", prevSlide);

const nextSlide = () => {
  if (i === slideshow.length - 1) {
    i = 0;
  } else {
    i++;
  }
  displaySlide(i);
};

document.querySelector(".next").addEventListener("click", () => {
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
      displaySlide(dot.getAttribute("data-slide"));
    });
    navigationDots.appendChild(dot);
  }
  navigationDots.children[i].innerText = "radio_button_checked";
};
createDots();

const autoNext = (lever) => {
  if (lever) {
    clearInterval(intervalID);
    intervalID = setInterval(nextSlide, 5000);
  } else {
    clearInterval(intervalID);
    intervalID = undefined;
  }
};

autoNext(true);
