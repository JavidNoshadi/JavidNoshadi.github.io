const body = document.querySelector('body')
const loader = document.querySelector('.loader')
const dot = document.querySelector('.dot')
dot.addEventListener('animationend', () => {
  loader.style.display = 'none'
})
const hamburger = document.querySelector('.menu')
const links = document.querySelector('.links')
const lines = document.querySelectorAll('.ham')
hamburger.addEventListener('click',()=>{
  links.classList.toggle('open')
 // hamburger.setAttribute('stroke-fill','red')
  hamburger.classList.toggle('active')
  lines.forEach((line)=>{
      line.classList.toggle('active')

  })
  console.log('toggled');
})
