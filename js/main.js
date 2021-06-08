// Select Elements
const hamb = document.querySelector(".menu-humb");
const pres = document.querySelector(".menu-pres");
const nav = document.querySelector(".menu-nav");
const img = document.querySelector("img");
const navlist = document.querySelectorAll("li");
const svgshadow = document.querySelector(".m-svg");

hamb.addEventListener("click", () => {
  pres.classList.toggle("show");
  nav.classList.toggle("show");
  hamb.classList.toggle("open");

  setTimeout(() => {
    img.classList.toggle("show");
    setTimeout(() => {
      img.classList.toggle("reduce");
    }, 500);
  }, 1000);
  navlist.forEach((li) => {
    li.classList.toggle("show");
  });
});

window.onload = () => {
  setTimeout(() => {
    svgshadow.classList.add("popp");
    svgshadow.classList.add("shadow");
  }, 750);
  svgshadow.addEventListener("click", () => {
    svgshadow.classList.toggle("shadow");
  });
};

// WORKIN WITH CURSOR

const cursorPointer = document.querySelector(".cursor");
const title = document.querySelector("h1");
const linehumb = document.querySelectorAll(".line-humb");

window.addEventListener("mousemove", (e) => {
  cursorPointer.style.top = e.pageY + "px";
  cursorPointer.style.left = e.pageX + "px";
});
title.addEventListener("mouseover", () => {
  cursorPointer.classList.add("curs-grow");
  //   title.classList.add("color-mouse");
});
title.addEventListener("mouseleave", () => {
  cursorPointer.classList.remove("curs-grow");
});

hamb.addEventListener("mouseover", () => {
  cursorPointer.classList.add("curs-growhumb");
  linehumb.forEach((line) => {
    line.classList.add("line-mouse");
  });
});
hamb.addEventListener("mouseleave", () => {
  cursorPointer.classList.remove("curs-growhumb");
  linehumb.forEach((line) => {
    line.classList.remove("line-mouse");
  });
});
navlist.forEach((li) => {
  li.addEventListener("mouseover", () => {
    cursorPointer.classList.add("curs-grownav");
    li.classList.add("line-mousenav");
  });
  li.addEventListener("mouseleave", () => {
    cursorPointer.classList.remove("curs-grownav");
    li.classList.remove("line-mousenav");

  });
});
