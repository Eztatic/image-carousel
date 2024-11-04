const carouselImages = [
  "./images/ocean1.jpg",
  "./images/ocean2.jpg",
  "./images/ocean3.jpg",
];

const slideshow = document.querySelector(".slides");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const navigationDots = document.querySelector(".dots");

let i = 0;
slideshow.style.backgroundImage = `url(${carouselImages[0]})`;

const nextSlide = () => {
  if (i === carouselImages.length - 1) {
    i = 0;
  } else {
    i++;
  }
  slideshow.style.backgroundImage = `url(${carouselImages[i]})`;
  updateDots();
};

next.addEventListener("click", nextSlide);

previous.addEventListener("click", () => {
  if (i === 0) {
    i = carouselImages.length - 1;
  } else {
    i--;
  }
  slideshow.style.backgroundImage = `url(${carouselImages[i]})`;
  updateDots();
});

const createDots = () => {
  for (let n = 0; n < carouselImages.length; n++) {
    const dot = document.createElement("span");
    dot.classList.add("material-symbols-outlined");
    dot.innerText = "radio_button_unchecked";
    navigationDots.appendChild(dot);
  }
  navigationDots.children[i].innerText = "radio_button_checked";
};
createDots();

const updateDots = () => {
  navigationDots.childNodes.forEach((dot) => {
    dot.innerText = "radio_button_unchecked";
  });
  navigationDots.children[i].innerText = "radio_button_checked";
};

setInterval(nextSlide, 5000);
