/**
 *  @type {HTMLSpanElement}
 */
const suma = document.querySelector("#app-suma");

/**
 *  @type {HTMLSpanElement}
 */
const resta = document.querySelector("#app-resta");

/**
 *  @type {HTMLSpanElement}
 */
const multiplicacion = document.querySelector("#app-mult");

/**
 *  @type {HTMLSpanElement}
 */
const division = document.querySelector("#app-div");

/**
 *  @type {HTMLSpanElement}
 */
const modulo = document.querySelector("#app-mod");

/**
 * Esta funcion permite controlar el evento submit sobre el formulario
 * @param {SubmitEvent} evt
 */
const controlador1 = (evt) => {
  evt.preventDefault();

  const [a, b] = Array.from(new FormData(evt.target).values()).map(Number);

  suma.innerText = a + b;
  resta.innerText = a - b;
  multiplicacion.innerText = a * b;
  division.innerText = a / b;
  modulo.innerText = a % b;
};

document.querySelector("#app-form").addEventListener("submit", controlador1);
