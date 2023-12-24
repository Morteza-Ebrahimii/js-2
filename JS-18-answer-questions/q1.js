// * ====================================1===========================================

/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========

const circle = document.querySelector("#circle");
const remove = document.querySelector("#remove");
// console.log(remove);

remove.addEventListener("click" , () => {
  circle.style.display = "none"
})


//!change color of circle when click the circle 
// const changeColor = () => {
//   return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
// };

// remove.addEventListener("click" , () => {
//   circle.style.backgroundColor = changeColor()
// })

