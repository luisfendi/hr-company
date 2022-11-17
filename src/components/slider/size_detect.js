export const size_detect = () => {
  let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );
  return scrollWidth < 720 ?
          2 : 
          scrollWidth >= 720 && scrollWidth < 1024 ?
          3 :
          4
}