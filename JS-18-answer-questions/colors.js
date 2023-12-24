// ? You have to write a code that changes the color of rectangles upon clicking each color.

// - First, look at color-palette1.png . You should create a similar page.
// - There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
// - The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
// - hint: you can modify the alpha (a) of the rgba color to create the spectrum color
// - For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

let color = [
  ["rgba(31, 127, 102, 1)"],
  ["rgba(255, 200, 0, 1)"],
  ["rgba(255, 123, 0, 1)"],
  ["rgba(216, 1, 1, 1)"],
  ["rgba(223, 4, 70, 1)"],
  ["rgba(127, 31, 85, 1)"],
  ["rgba(93, 18, 199, 1)"],
  ["rgba(93, 18, 199, 1)"],
];

const buttonColor = document.querySelectorAll(".btnColor");
const boxColor = document.querySelectorAll(".bxColor");
// console.log(buttonColor);

//for get each color for boxs
let loop = 0;
buttonColor.forEach((btn) => {
  btn.style.backgroundColor = color[loop];
  loop++;
});

buttonColor.forEach((el) => {
  el.addEventListener("click", () => {

    if ( el.classList.contains("green") ) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[0];
        boxColor[1].style.backgroundColor = "rgba(31, 127, 102, .8)";
        boxColor[2].style.backgroundColor = "rgba(31, 127, 102, .6)";
        boxColor[3].style.backgroundColor = "rgba(31, 127, 102, .4)";
        boxColor[4].style.backgroundColor = "rgba(31, 127, 102, .2)";
      }
    }

    else if (el.classList.contains("yellow")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[1];
        boxColor[1].style.backgroundColor = "rgba(255, 200, 0, .8)";
        boxColor[2].style.backgroundColor = "rgba(255, 200, 0, .6)";
        boxColor[3].style.backgroundColor = "rgba(255, 200, 0, .4)";
        boxColor[4].style.backgroundColor = "rgba(255, 200, 0, .2)";
      }
    }

    else if (el.classList.contains("orange")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[2];
        boxColor[1].style.backgroundColor = "rgba(255, 123, 0, .8)";
        boxColor[2].style.backgroundColor = "rgba(255, 123, 0, .6)";
        boxColor[3].style.backgroundColor = "rgba(255, 123, 0, .4)";
        boxColor[4].style.backgroundColor = "rgba(255, 123, 0, .2)";
      }
    }

    else if (el.classList.contains("red")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[3];
        boxColor[1].style.backgroundColor = "rgba(216, 1, 1, .8)";
        boxColor[2].style.backgroundColor = "rgba(216, 1, 1, .6)";
        boxColor[3].style.backgroundColor = "rgba(216, 1, 1, .4)";
        boxColor[4].style.backgroundColor = "rgba(216, 1, 1, .2)";
      }
    }

    else if (el.classList.contains("pink")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[4];
        boxColor[1].style.backgroundColor = "rgba(223, 4, 70, .8)";
        boxColor[2].style.backgroundColor = "rgba(223, 4, 70, .6)";
        boxColor[3].style.backgroundColor = "rgba(223, 4, 70, .4)";
        boxColor[4].style.backgroundColor = "rgba(223, 4, 70, .2)";
      }
    }

    else if (el.classList.contains("purple")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[5];
        boxColor[1].style.backgroundColor = "rgba(127, 31, 85, .8)";
        boxColor[2].style.backgroundColor = "rgba(127, 31, 85, .6)";
        boxColor[3].style.backgroundColor = "rgba(127, 31, 85, .4)";
        boxColor[4].style.backgroundColor = "rgba(127, 31, 85, .2)";
      }
    }

    else if (el.classList.contains("blue")) {
      for (let i = 0; i < boxColor.length; i++) {
        boxColor[0].style.backgroundColor = color[6];
        boxColor[1].style.backgroundColor = "rgba(93, 18, 199, .8)";
        boxColor[2].style.backgroundColor = "rgba(93, 18, 199, .6)";
        boxColor[3].style.backgroundColor = "rgba(93, 18, 199, .4)";
        boxColor[4].style.backgroundColor = "rgba(93, 18, 199, .2)";
      }
    }
  });
});
