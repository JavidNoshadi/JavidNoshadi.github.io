const body = document.querySelector('body')
const loader = document.querySelector('.loader')
const dot = document.querySelector('.dot')
dot.addEventListener('animationend', () => {
  loader.style.display = 'none'
})
/*
 
 const svgs = document.querySelectorAll('.waves path')
svgs.forEach((svg)=>{
 let path = svg.getAttribute('d')
 svg.style.animation = 'switchpath 5s ease infinite'
   console.log(path);
}) */
