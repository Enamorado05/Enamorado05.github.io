const boton = document.querySelector("button");
const display = document.querySelectorAll("input");
button.addEventListener("click", function () {
  const id = boton.getAttribute("data-id");
  display.value = eval(display.value);
});
