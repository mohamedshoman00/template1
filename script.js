const headerLinks = document.querySelector(".header .links");
const icon = document.querySelector(".header .links .icon");
const ulList = document.querySelector(".header .links ul");
const spanIcon = document.querySelector(".links .icon span:nth-child(2)");
// console.log(headerLinks);
// console.log(icon);
// console.log(ulList);
const dispList = "dispaly: block;";
icon.addEventListener("click", () => {
  spanIcon.classList.toggle("span-icon-width");
  ulList.classList.toggle("ulView");
});
// Scroll Smothly to sections
ulList.addEventListener("click", (e) => {
  e.preventDefault();
  const section = e.target.closest("a").href.split("#")[1];
  const target = document.querySelector(`#${section}`);
  target.scrollIntoView({ behavior: "smooth" });
  spanIcon.classList.toggle("span-icon-width");
  ulList.classList.toggle("ulView");
});
//
const landing = document.querySelector(".landing");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(landing);
