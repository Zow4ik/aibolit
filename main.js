"use strict"

function setCity(city) {
   localStorage.setItem('city', city)
   cityHtml.textContent = city
}

const cityHtml = document.querySelector('.header__city')
const currentCity = localStorage.getItem('city')

if (!currentCity) {
   setCity('Волгоград')
} else {
   cityHtml.textContent = currentCity
}

const cityVolg = document.getElementById('volg')
const cityGroz = document.getElementById('groz')

cityVolg.addEventListener('click', () => {
   setCity('Волгоград')
   overlayCity.classList.remove('open')
})
cityGroz.addEventListener('click', () => {
   setCity('Грозный')
   overlayCity.classList.remove('open')
})


const overlayCity = document.querySelector('.mobile-overlay-city')
const openOverlayCity = document.querySelector('.header__city')
const closeOverlayCity = document.querySelector('.mobile-overlay-city__button')

openOverlayCity.addEventListener('click', () => {
   overlayCity.classList.add('open')
})
closeOverlayCity.addEventListener('click', () => {
   overlayCity.classList.remove('open')
})


const overlayMenu = document.querySelector('.mobile-overlay-menu')
const openOverlayMenu = document.querySelector('.header__burger-menu')
const closeOverlayMenu = document.querySelector('.mobile-overlay-menu__button')

openOverlayMenu.addEventListener('click', () => {
   overlayMenu.classList.add('open')
})
closeOverlayMenu.addEventListener('click', () => {
   overlayMenu.classList.remove('open')
})


function chandeSlide(slideNum) {
   const titles = document.querySelectorAll('.slider__title')
   const images = document.querySelectorAll('.slider__image')
   const buttons = document.querySelectorAll('.slider__button')
   
   for (let i = 0; i < titles.length; ++i) {
      if (slideNum - 1 === i) {
         titles[i].classList.remove('visually-hidden')
         images[i].classList.remove('visually-hidden')
         buttons[i].classList.add('active-button')
      } else {
         titles[i].classList.add('visually-hidden')
         images[i].classList.add('visually-hidden')
         buttons[i].classList.remove('active-button')
      }
   }
}

const buttonsSlider = document.querySelector('.slider__button-wrapper')

buttonsSlider.addEventListener('click', (event) => {
   const { target } = event

   if ( !target.closest('.slider__button') ) return

   chandeSlide(target.dataset.numSlide)
})