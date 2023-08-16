const container = document.querySelector(".container");
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

const divs = document.querySelectorAll(".cuadrado");
for (i of divs) {
  i.addEventListener("mouseover", func);
}
const mySlider = document.getElementById("my-slider");
const sliderValue = document.querySelector(".slider-value");
console.log(sliderValue);
function slider() {
  sliderValue.textContent = mySlider.value;
  const num = mySlider.value * mySlider.value;
  const medida = 700 / num;
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.className = "cuadrado";
    div.style.height = `${medida}px`;
    div.style.width = `${medida}px`;
    container.appendChild(div);
  }
}
mySlider.addEventListener("change", slider);
