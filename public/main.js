let hambugerMenu = document.querySelector('.menu-hambuger');
let menuList = document.querySelector('.menu-list');
document.onclick = function (e) {
  if (e.target.closest('.menu-hambuger')) {
    menuList.classList.toggle('max-h-0');
    menuList.classList.toggle('max-h-96');
  } else {
    menuList.classList.replace('max-h-96', 'max-h-0');
  }
};
