const body = document.querySelector('body')
const loader = document.querySelector('.loader')
const dot = document.querySelector('.dot')
dot.addEventListener('animationend', () => {
  loader.style.display = 'none'
})
const hamburger = document.querySelector('.feather-menu')
const links = document.querySelector('.links')
hamburger.addEventListener('click',()=>{
  links.classList.toggle('open')
  hamburger.classList.toggle('active')
  console.log('toggled');
})
