export const optimize = (selector, class_rem) => {
  const wrap = document.querySelectorAll(selector);
  const img = wrap[0].querySelector('img');
  const new_img = new Image();
  new_img.src = img.getAttribute('src');
  new_img.onload = () => {
    wrap.forEach(el => el.classList.remove(class_rem))
  }
}