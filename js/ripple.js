export function ripple(e) {
  const ripple = document.createElement("span");

  ripple.classList.add("ripple");

  this.appendChild(ripple);

  const x = e.clientX - e.currentTarget.offsetLeft;
  const y = e.clientY - e.currentTarget.offsetTop;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
    ripple.remove();
  }, 800);
}
