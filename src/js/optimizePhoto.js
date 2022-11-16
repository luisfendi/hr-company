export const optimize = (selector, class_rem) => {
  const wrap = document.querySelector(selector);
  const img = wrap.querySelector('img');


  const new_img = new Image();
  new_img.src = img.getAttribute('src');
  new_img.onload = () => {
    wrap.classList.remove(class_rem);
  }
}