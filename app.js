let body = document.querySelector('body')
// i use generated nums to get diffrent colors . so each time user visit the site, they will see diffrent colors as base theme:)
function colors() {
  let num1 = Math.floor(Math.random() * 255)
  let num2 = Math.floor(Math.random() * 255)
  let num3 = Math.floor(Math.random() * 255)
  return nums = `${num1},${num2},${num3}`
}
colors();
let avatar = document.querySelector('.avatar img')
let head = document.querySelector('.head h1')
avatar.style.border = `2px solid rgb(${nums})`;
head.style.color = `rgb(${nums})`;
let dot = document.querySelector('.dot')
let loader = document.querySelector('.loader')
dot.addEventListener('animationend',()=>{
  loader.style.display = 'none'
})
console.log(dot)