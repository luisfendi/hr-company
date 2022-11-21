
export const disappear = (target, style) => {
  let prevScroll = window.pageYOffset;

  document.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - prevScroll > 2 && target.current) {
      target?.current.classList.add(style);
    } else if (prevScroll - currentScroll > 2 && target.current) {
      target?.current.classList.remove(style);
    }
    prevScroll = currentScroll;
  })
}