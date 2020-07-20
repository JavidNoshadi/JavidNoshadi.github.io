const body = document.querySelector('body')
const loader = document.querySelector('.loader')
const dot = document.querySelector('.dot')
dot.addEventListener('animationend', () => {
  loader.style.display = 'none'
})