/**
 * @type {HTMLSpanElement}
 */
const esValido = document.querySelector("#esValido");

/**
 * Esta funcion permite controlar el evento submit sobre el formulario
 * @param {SubmitEvent} evt
 */
const controlador4 = (evt) => {
  evt.preventDefault();

  const [valor] = Array.from(new FormData(evt.target).values()).map(Number);

  esValido.innerText = `${valor >= 1 && valor <= 10}`;
};

document.querySelector("#app4-form").addEventListener("submit", controlador4);
