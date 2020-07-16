// i use generated nums to get diffrent colors . so each time user visit the site, they will see diffrent colors as base theme:)
function colors() {
  let num1 = Math.floor(Math.random() * 255)
  let num2 = Math.floor(Math.random() * 255)
  let num3 = Math.floor(Math.random() * 255)
  return nums = `${num1},${num2},${num3}`
   
}
colors();
console.log(nums);