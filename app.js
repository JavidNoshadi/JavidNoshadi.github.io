 /*setTimeout(function() {
  let greeting = document.getElementById('greeting')
  let name = prompt('Enter your name')
  greeting.innerText = name
  let visitor = greeting.innerText
  return visitor
}, 3000) */
window.addEventListener('load', () => {
  localStorage.getItem('body')
 // localStorage.setItem('visitor', visitor)
})
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
dot.addEventListener('animationend', () => {
  loader.style.display = 'none'
})
console.log(dot)
localStorage.setItem('body', body)
console.log(body);