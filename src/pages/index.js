const openPopupButton = document.querySelector('.product__one-click')
const popup = document.querySelector('.popup')
const closePopupButton = popup.querySelector('.popup__close')
const openMenuButton = document.querySelector('.header__button')
const menu = document.querySelector('.menu')
const closeMenuButton = menu.querySelector('.menu__close')
const counter = document.querySelector('.product__quantity')
const counterPlusButton = document.querySelector('.product__plus')
const counterMinusButton = document.querySelector('.product__minus')
const mainImage = document.querySelector('.product__main-image')
const images = document.querySelectorAll('.product__image')

images.forEach((image) => {
  function addClass() {
    images.forEach((item) => {
      item.classList.remove('product__image_selected')
    })
    if (mainImage.src === image.src) {
      image.classList.add('product__image_selected')
    }
  }

  if (mainImage.src === image.src) {
    image.classList.add('product__image_selected')
  }

  function changePhoto() {
    mainImage.src = image.src;
    addClass()
  }

  image.addEventListener('click', changePhoto)
})

let quantity = 1;

function openPopup() {
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function openMenu() {
  menu.classList.add('menu_opened')
}

function closeMenu() {
  menu.classList.remove('menu_opened')
}

function increaseNumber() {
  quantity++;
  counter.textContent = quantity;
}

function reduceNumber() {
  if (quantity > 1) {
    quantity--;
    counter.textContent = quantity;
  }
}

openPopupButton.addEventListener('click', openPopup)
closePopupButton.addEventListener('click', closePopup)
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
counterPlusButton.addEventListener('click', increaseNumber)
counterMinusButton.addEventListener('click', reduceNumber)