/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========
 const hover = document.querySelector("#hover");

const changeColor = () => {
  return `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
};

 hover.addEventListener("mousemove", ()=>{
  hover.style.backgroundColor = changeColor() 
 })


 //! please do not uncommnet this lines ⬇
 //* Be kind to your eyes
 const body = document.body;
 body.addEventListener("mousemove", ()=> {
  body.style.backgroundColor = changeColor() 
 })