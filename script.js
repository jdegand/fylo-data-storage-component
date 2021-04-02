/*
const slider = document.querySelector('#slider');
const thumb = document.querySelector("-webkit-slider-thumb");
const progressBar = document.querySelector("#progressBar");
let slideValue = document.querySelector("#slideValue");


slider.oninput = function() {
  slideValue = slider.value + "%";
  progressBar.style.width = (slider.value / 10) + "%";
}
*/

//can't go left  after width is set ?

const slider = document.querySelector('#slider');
const thumb = document.querySelector("-webkit-slider-thumb");
const progressBar = document.querySelector("#progressBar");
let slideValue = document.querySelector("#slideValue");
let currentValue = document.querySelector("#currentValue");
let gigsUsed = document.querySelector(".gigsUsed");

slider.addEventListener("input", function(event){
  let value = this.value;

  slideValue.classList.add("active");
  currentValue.innerText = 1000 - value;
  currentValue.style.left = `${value / 2}%`;

  gigsUsed.innerText = value;

  progressBar.style.opacity = 1;
  progressBar.style.width =  Math.floor((value / 1000) * 250) + "px"

})

currentValue.addEventListener("blur", function(){
  slideValue.classList.remove("active")
})

/*
slider.addEventListener("mousemove", function(){
    let value = slider.value

    let color = `linear-gradient(to right, rgb(255,163,153) ${value}%, rgb(255,77,151) ${value}%)`;
    slider.style.background = color;

})
*/
