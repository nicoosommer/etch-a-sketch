const container = document.querySelector(".container");
const mySlider = document.getElementById("my-slider");
const sliderValue = document.querySelector(".slider-value");
const confirm = document.querySelector(".confirm");
const resett = document.querySelector(".reset");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function func(e) {
  //e.target.className = "cuadrado-activo";
  const r = getRandomInt(255);
  const g = getRandomInt(255);
  const b = getRandomInt(255);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

console.log(sliderValue);

function slider() {
  sliderValue.textContent = mySlider.value;
}
function borrar() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
function reset() {
  const divs = document.querySelectorAll(".cuadrado");
  for (i of divs) {
    i.style.backgroundColor = "white";
  }
}

function armar() {
  borrar();
  const num = mySlider.value;
  const medida = 700 / num;
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.className = "cuadrado";
    div.style.height = `${medida}px`;
    div.style.width = `${medida}px`;
    container.appendChild(div);
  }
  const divs = document.querySelectorAll(".cuadrado");
  for (i of divs) {
    i.addEventListener("mouseover", func);
  }
}

mySlider.addEventListener("change", slider);
confirm.addEventListener("click", armar);
resett.addEventListener("click", reset);
