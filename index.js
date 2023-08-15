const container = document.querySelector(".container");
const num = prompt("Ingrese de cuanto por cuanto es la cuadricula");
console.log(num);
const medida = 700 / num;
console.log(medida);

for (let i = 0; i < num * num; i++) {
  const div = document.createElement("div");
  div.className = "cuadrado";
  div.style.height = `${medida}px`;
  div.style.width = `${medida}px`;
  container.appendChild(div);
}
function func(e) {
  e.target.className = "cuadrado-activo";
}

const divs = document.querySelectorAll(".cuadrado");
for (i of divs) {
  i.addEventListener("mouseover", func);
}
