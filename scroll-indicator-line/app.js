const scrollIndicatorLine = document.getElementById("scroll-indicator");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
  scrollIndicatorLine.style.width = `${scrolled}%`;
});
