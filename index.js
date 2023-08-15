const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "cuadrado";
  container.appendChild(div);
}
function func(e) {
  e.target.className = "cuadrado-activo";
}

const divs = document.querySelectorAll(".cuadrado");
for (i of divs) {
  i.addEventListener("mouseover", func);
}
