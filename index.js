const container = document.querySelector(".container");
const mySlider = document.getElementById("my-slider");
const sliderValue = document.querySelector(".slider-value");
const confirm = document.querySelector(".confirm");
// const num = prompt("Ingrese de cuanto por cuanto es la cuadricula");
// console.log(num);
// const medida = 700 / num;
// console.log(medida);

// for (let i = 0; i < num * num; i++) {
//   const div = document.createElement("div");
//   div.className = "cuadrado";
//   div.style.height = `${medida}px`;
//   div.style.width = `${medida}px`;
//   container.appendChild(div);
// }
function func(e) {
  e.target.className = "cuadrado-activo";
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
  const divs = document.querySelectorAll(".cuadrado-activo");
  for (i of divs) {
    i.classList.replace("cuadrado-activo", "cuadrado");
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

const resett = document.querySelector(".reset");
console.log(resett);
resett.addEventListener("click", reset);
