export const optimize = (selector, class_rem) => {
  console.log(selector)
  const wrap = document.querySelector(selector);
  const img = wrap.querySelector('img');

  const new_img = new Image();
  new_img.src = img.dataset.src;
  
  new_img.onload = () => {
    console.log('end')
    img.classList.remove(class_rem);
  }
}